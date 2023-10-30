'use client'
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from "../components/common/Spinner";

export default function VerificationPage() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // State variable for the message
  const [isError, setIsError] = useState(false); // State variable to determine if the message is an error
  const [verifying, setVerifying] = useState(false); // State variable to determine if the email is being verified
  const searchParams = useSearchParams();
  const emailToVerify = searchParams.get('email');
  const uuidToVerify = searchParams.get('verificationUUID');

  const verifyEmail = async () => {
    setVerifying(true); // Set verifying to true when the function is called
    try {
      console.log('emailToVerify', emailToVerify);
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailToVerify, verificationUUID: uuidToVerify }),
      });

      const data = await response.json();

      if (data.message) {
        setVerified(true);
        setMessage(data.message); // Update the message state with the response message
        setIsError(false); // Set isError to false since it's a success message
      } else {
        setMessage(data.error); // Set the error message from the response
        setIsError(true); // Set isError to true since it's an error message
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.'); // Set a generic error message
      setIsError(true); // Set isError to true since it's an error message
    } finally {
      setVerifying(false); // Set verifying back to false once the verification process is completed
      setLoading(false);
    }
  };

  if (loading && !emailToVerify && !uuidToVerify) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      {!verified ? (
        <button onClick={verifyEmail} disabled={verifying} className='bg-blue-500 text-white px-4 py-2 rounded'>{verifying && <Spinner/>} Click to Verify your Email</button>
      ) : null}
      {message && <p className={isError ? 'text-red-500 mt-4' : 'text-green-500 mt-4'}>{message}</p>} {/* Display the message based on isError */}
    </div>
  );
}
