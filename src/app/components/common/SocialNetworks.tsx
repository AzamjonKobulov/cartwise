import Link from "next/link";
import React from "react";
import { Apple, Facebook, Google, LinkedIn, Twitter } from "../icons/socials";

const SocialNetworks = () => {
  return null;
  const socials = [
    {
      label: "Facebook",
      icon: <Facebook />,
    },
    {
      label: "Google",
      icon: <Google />,
    },
    {
      label: "Twitter",
      icon: <Twitter />,
    },
    {
      label: "Apple",
      icon: <Apple />,
    },
    {
      label: "LinkedIn",
      icon: <LinkedIn />,
    },
  ];
  return (
    <div className='text-center mt-6 lg:pr-14'>
      <p className='font-source-pro text-xl md:text-2xl font-extrabold'>
        Sign Up With
      </p>
      <div className='flex items-center justify-center space-x-5 mt-5'>
        {socials.map((social, idx) => (
          <Link
            href='/'
            key={idx}
            className='w-9 h-9 shrink-0 group'
            aria-label={`${social.label} link`}>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialNetworks;
