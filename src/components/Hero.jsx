import InviteButton from "../ui/InviteButton";

function Hero() {
  return (
    <section className="mb-[5.5rem] grid place-items-center bg-no-repeat text-center lg:relative lg:mb-0 lg:h-[41rem] lg:bg-desktop-pattern lg:bg-[right_-40rem_top_-16.25rem] lg:px-10 lgPlus:bg-[right_-28.5rem_top_-16.25rem]">
      <div className="w-full max-w-[69.375rem]">
        <div className="h-[18.75rem] bg-mobile-pattern bg-cover bg-center bg-no-repeat px-[0.875rem] lg:absolute lg:right-[-12rem] lg:top-[-3rem] lg:h-auto lg:bg-none lg:p-0 lgPlus:right-[-8.2rem] lgPlus:top-[-7.6rem]">
          <img
            src="./images/image-mockups.png"
            alt="mockups"
            className="mx-auto w-full max-w-[23.5rem] -translate-y-[7.75rem] mid:max-w-[30rem] lg:max-w-[85%] lg:translate-y-0 lgPlus:max-w-none"
          />
        </div>

        <div className="mt-[6.8dvw] px-6 mid:mt-[12rem] lg:m-0 lg:w-[28rem] lg:p-0 lg:text-start">
          <h1 className="mb-4 text-[2.5rem] font-light leading-[3rem] tracking-[-0.0437rem] text-dark-blue lg:mb-6 lg:text-[3.5rem] lg:leading-[4rem]">
            Next generation digital banking
          </h1>

          <p className="mb-8 text-[0.9375rem] leading-[1.5625rem] tracking-[-0.015rem] lg:mb-9 lg:text-[1.125rem] lg:leading-[1.75rem]">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <InviteButton />
        </div>
      </div>
    </section>
  );
}

export default Hero;
