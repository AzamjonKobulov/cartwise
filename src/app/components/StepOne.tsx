interface Select {
  id: string;
  label: string;
}

const chexboxes: Select[] = [
  { id: '1', label: 'I am interested in savings' },
  {
    id: '2',
    label: 'I would like to refer other people to claim larger reward',
  },
  { id: '3', label: 'I accept terms and conditions' },
];

const StepOne: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto  space-y-7">
      <div className="space-y-3">
        <h2 className="text-center">
          <span className="text-gradient">Welcome</span> to Cartwise
        </h2>
        <h4 className="max-w-3xl mx-auto font-source-pro text-center md:text-lg lg:text-xl">
          You Have been invited to save money with c artwise by XXX. If you
          choose to accept you and XXX will earn 10 GBP which you can reclaim as
          gift card. Only ZZZ rewards in your area are left
        </h4>
      </div>
      <div className="space-y-10">
        <div className="h-[16rem] sm:h-[24rem] lg:h-[32rem] rounded-lg lg:rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/fdNVfAWuLNg"
            title="M3 MacBook Air - Please, Don’t Buy ANY MacBook Right Now!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <form className="lg:w-2/3 flex flex-col gap-3.5 md:gap-5 md:text-lg lg:text-xl">
        {chexboxes.map((check) => (
          <label
            htmlFor={check.id}
            className="flex items-center justify-between gap-10 text-start text-xl md:text-2xl font-medium cursor-pointer"
          >
            <span>{check.label}</span>
            <div className="relative">
              <input type="checkbox" id={check.id} />
              <span className="absolute top-1 left-1">
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path
                    d="M11.6654 3.5L5.2487 9.91667L2.33203 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default StepOne;
