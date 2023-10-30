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
      <form className="flex flex-col gap-5 md:text-lg lg:text-xl">
        <label htmlFor="1" className="flex items-center gap-5">
          <span>I am interested in savings</span>
          <input type="radio" name="1" id="1" />
        </label>
        <label htmlFor="2" className="flex items-center gap-5">
          <span>I would like to refer other people to claim larger reward</span>
          <input type="radio" name="1" id="2" />
        </label>
        <label htmlFor="3" className="flex items-center gap-5">
          <span>I accept terms and conditions</span>
          <input type="radio" name="1" id="3" />
        </label>
      </form>
    </div>
  );
};

export default StepOne;
