'use client'
import { useState } from 'react';
import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Cursor } from "../icons";
import SocialNetworks from "./SocialNetworks";
import Spinner from "./Spinner";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    setError('');
    setMessage('');

    try {
      const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for signing up! Please check your email inbox for verification.');
        setError('');
      } else {
        setError(data.error || 'An error occurred. Please try again.');
        setMessage('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setMessage('');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <>
      <form className='py-5 lg:pr-8' onSubmit={handleSubmit}>
        <div className='relative flex items-center border border-brand-gray-300/25 rounded-full gap-3 px-8 py-5'>
          <EnvelopeIcon className='w-6 h-6 shrink-0' />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            className='w-full font-source-pro text-black outline-none xl:text-xl placeholder-black tracking-tighter'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || !!message} // Disable input when loading
          />
        </div>
        {(!message) && <button
          type='submit'
          className='relative w-full bg-btn-gr hover:bg-btn-gr-reverse flex items-center justify-center text-white rounded-full transition-all duration-200 space-x-2.5 py-5 mt-5'
          disabled={isLoading || !!message} // Disable button when loading
        >
          {isLoading ? <Spinner/> : ( // Show spinner or text based on loading state
            <>
              <span className='text-xl/8 font-bold tracking-tighter uppercase'>
                sign up
              </span>
              <span className='w-4 h-4 xl:w-6 xl:h-6 shrink-0'>
                <ArrowUpRightIcon className='w-full h-full' />
              </span>
              <Cursor />
            </>
          )}
        </button>}
      </form>

      {message && <div className="text-green-500 mt-4">{message}</div>}
      {error && <div className="text-red-500 mt-4">{error}</div>}

      <SocialNetworks />
    </>
  );
};

export default SignUpForm;
