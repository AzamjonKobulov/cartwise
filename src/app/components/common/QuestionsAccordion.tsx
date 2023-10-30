"use client";
import { faqs } from "@/utils/data";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const QuestionsAccordion = () => {
  return (
    <div className='max-w-xl xl:max-w-2xl mx-auto mt-10 xl:mt-14 space-y-6'>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='w-full flex items-center border border-brand-gray-300 rounded-full px-6 xl:px-10 py-4 xl:py-5 group'>
                  <span className='font-source-pro xl:text-lg text-left font-bold text-brand-balck-200 line-clamp-2 xl:line-clamp-1 tracking-tighter'>
                    {faq.q}
                  </span>

                  <ChevronDownIcon
                    className={`w-5 h-5 xl:w-6 xl:h-6 shrink-0 stroke-[3px] group-hover:rotate-180 transition-transform duration-200 ml-auto ${
                      open && "rotate-180"
                    }`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className='px-6 md:px-10 pt-6 pb-3'>
                  {faq.a}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default QuestionsAccordion;
