import { IconArrowLongRight } from "components/shared/icons";

const CardBody = ({ data = {} }) => {
  const {
    title = "",
    excerpt = "",
    publish_date = "",
    canonical_url = "",
  } = data;

  const publish_date_formatted = new Date(publish_date).toLocaleString(
    "en-US",
    {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }
  );
  // iwht am and pm
  const publish_date_hour = new Date(publish_date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // remove domain from url
  const canonical_url_domain = canonical_url.replace(
    "https://vetpoblenou.com",
    "/blog"
  );

  return (
    <div className="break-words min-w-0">
      <div className="flex gap-2 items-center flex-wrap mb-4 lg:mb-8 text-alter text-sm md:text-lg">
        {/* <div className="rounded-full w-8 md:w-12 h-8 md:h-12 overflow-hidden bg-neutral-600"></div> */}
        {/* <div>Julie Christie</div> */}
        {/* <span>&middot;</span> */}
        {publish_date && <div>{publish_date_formatted}</div>}
        <span>&middot;</span>
        {publish_date && <div>{publish_date_hour}</div>}
        {/* <span>&middot;</span> */}
        {/* <div>2 comments</div> */}
      </div>
      <a href={canonical_url_domain}>
        <h2 className="text-primary text-xl lg:text-4xl font-wulkan mb-4">
          {title}
        </h2>
      </a>
      <div className="border-dashed border-b-2 border-black mb-4"></div>
      {/* render html */}
      <div
        className="lg:text-xl mb-6 text-neutral-600 break-words min-w-0"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      ></div>
      <a
        href={canonical_url_domain}
        className="lg:text-2xl inline-flex items-end text-black"
      >
        <span className="mr-4">Leer más</span>
        <IconArrowLongRight />
      </a>
    </div>
  );
};

export default CardBody;
