import {connectToDatabase} from "@/utils/mongo";
import {getAppData} from "@/utils/appdata";
import {sendEmail} from "@/utils/email";
import {NextResponse} from "next/server";
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library

export async function POST(request: Request) {
  const {db} = await connectToDatabase();
  const {email} = await request.json();
  if(!email) return NextResponse.json({error: 'Email is required'}, {status: 400});
  // validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) return NextResponse.json({error: 'Invalid email address'}, {status: 400});

  const date = new Date();
  const {appName, website, test} = getAppData();
  const collection = db.collection('_subscriptions');
  // Generate a UUID for email verification
  const verificationUUID = uuidv4();

  //check if we have email already
  let record = await collection.findOne({email});
  let recordId = record?._id;
  if(!record) {
    record = await collection.insertOne({
      email, date,
      test
    });
    recordId = record.insertedId;
  }
  console.log('record', record);


  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome to ${appName}!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            color: #fff;
            background-color: #007BFF;
            border-radius: 5px;
            text-decoration: none;
        }
        .receipt {
            margin-top: 20px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to ${appName}!</h1>
        ${test ? '<p style="color:red;">This is a test email.</p>' : ''}
        <p>Dear Customer,</p>
        <p>Thank you for subscribing to our service. We're excited to have you on board!</p>
        <p>As a subscriber, you will have exclusive access to our curated baskets. To verify your email, click the button below:</p>
        <a href="${website}/verify?verificationUUID=${verificationUUID}&&email=${encodeURIComponent(email)}" class="button" style="color: white">Verify</a>
        <p>If you have any questions or need further assistance, feel free to reply to this email.</p>
        <p>Happy shopping!</p>
        <p>Best regards,</p>
        <p>The ${appName} Team</p>
    </div>
</body>
</html>
`
  try {
    console.log('sending email', email);
    const testText = test ? ' - Test' : '';
    await sendEmail(email, `Welcome to ${appName}!` + testText, html);
    // update record that was inserted to indicate that email was sent
    const resp = await collection.updateOne({_id: recordId}, {$set: {emailSent: true, verificationUUID}});
    console.log('resp', resp, {_id: recordId});

    return NextResponse.json({})
  } catch (error) {
    console.error(error);
    return NextResponse.json({error:'We could not send you an email, please try again later or contact support'}, {status: 400})
  }
}