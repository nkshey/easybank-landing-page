function Features() {
  const features = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      img: "./images/icon-online.svg",
    },
    {
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.",
      img: "./images/icon-budgeting.svg",
    },
    {
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      img: "./images/icon-onboarding.svg",
    },
    {
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      img: "./images/icon-api.svg",
    },
  ];

  return (
    <section className="mb-[5.5rem] flex justify-center bg-light-grayish-blue px-6 py-16 text-center lg:mb-[5rem] lg:px-10 lg:pb-[5.875rem] lg:pt-24 lg:text-start">
      <div className="w-full max-w-[69.375rem]">
        <div className="mb-14 flex flex-col items-center lg:mb-[4.5rem] lg:items-start">
          <h2 className="mb-[0.875rem] text-[2rem] font-light leading-[2.375rem] tracking-[-0.035rem] text-dark-blue lg:mb-4 lg:text-[2.5rem] lg:leading-[4rem]">
            Why choose Easybank?
          </h2>
          <p className="text-[0.9375rem] leading-[1.5625rem] tracking-[-0.015rem] lg:text-[1.125rem] lg:leading-[1.75rem]">
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br /> Control your finances like never before.
          </p>
        </div>

        <ul className="space-y-8 mid:space-y-12 lg:flex lg:gap-[1.875rem] lg:space-y-0">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-col items-center lg:items-start"
            >
              <img
                src={feature.img}
                alt={`${feature.title.toLowerCase()} icon`}
                className="mb-6 lg:mb-10"
              />
              <h3 className="mb-4 text-xl font-light leading-[1.75rem] tracking-[-0.0225rem] text-dark-blue lg:mb-[1.625rem] lg:text-2xl">
                {feature.title}
              </h3>
              <p className="max-w-[28rem] text-[0.9375rem] leading-[1.5625rem] tracking-[-0.015rem] lg:text-base lg:leading-[1.625rem]">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Features;
