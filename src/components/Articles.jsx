function Articles() {
  const articles = [
    {
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ...",
      img: "./images/image-currency.jpg",
      url: "#",
    },
    {
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
      img: "./images/image-restaurant.jpg",
      url: "#",
    },
    {
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you ...",
      img: "./images/image-plane.jpg",
      url: "#",
    },
    {
      author: "Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      img: "./images/image-confetti.jpg",
      url: "#",
    },
  ];

  return (
    <section className="mb-[5.5rem] grid place-items-center px-6 lg:mb-[5rem] lg:px-10">
      <div className="w-full max-w-[69.375rem]">
        <h2 className="mb-8 text-center text-[2rem] font-light leading-[2.375rem] tracking-[-0.035rem] text-dark-blue mid:mb-12 lg:mb-[2.5rem] lg:text-start lg:text-[2.5rem] lg:leading-[4.0625rem]">
          Latest Articles
        </h2>

        <ul className="space-y-6 mid:grid mid:grid-cols-2 mid:gap-6 mid:space-y-0 lg:flex lg:gap-[1.875rem]">
          {articles.map((article, index) => (
            <li
              key={index}
              className="overflow-hidden rounded-[0.3125rem] bg-white"
            >
              <a href={article.url}>
                <img
                  src={article.img}
                  alt={article.img.split("-")[1].slice(0, -4)}
                  className="aspect-[327/200] object-cover transition-all duration-150 hover:brightness-75 lg:h-[12.5rem] lg:w-[15.9375rem]"
                />
              </a>

              <div className="flex flex-col gap-2 px-8 pb-[2.625rem] pt-6 lg:p-6">
                <span className="text-[0.625rem] leading-[1.125rem] tracking-[-0.01rem]">
                  By {article.author}
                </span>
                <h4>
                  <a
                    href={article.url}
                    className="block font-light leading-[1.25rem] tracking-[-0.0187rem] text-dark-blue transition-all duration-150 hover:text-lime-green"
                  >
                    {article.title}
                  </a>
                </h4>
                <p className="text-[0.8125rem] leading-[1.125rem] tracking-[-0.0125rem]">
                  {article.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Articles;
