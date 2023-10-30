import { connectToDatabase } from "@/utils/mongo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { db } = await connectToDatabase();
  const { verificationUUID, email } = await request.json(); // Extract the UUID from the query parameters
  console.log('verificationUUID', verificationUUID, 'email', email);
  const collection = db.collection('_subscriptions');

  // Find the record with the provided UUID
  const record = await collection.findOne({ email });

  if (!record) {
    // If no record is found with the provided UUID, return an error
    return NextResponse.json({
      error: 'Invalid verification email',
    }, { status: 400 });
  }

  if(record.verified) {
    // If the record has already been verified, return an error
    return NextResponse.json({
      message: 'Email already verified',
    });
  }

  if(record.verificationUUID !== verificationUUID) {
    return NextResponse.json({
      error: 'Invalid verification token',
    }, { status: 400 });
  }

  // If a record is found, update the 'verified' field to true
  await collection.updateOne({ verificationUUID }, { $set: { verified: true } });

  // Return a success response
  return NextResponse.json({
    message: 'Email successfully verified! Thank you for confirming your subscription.',
  });
}
