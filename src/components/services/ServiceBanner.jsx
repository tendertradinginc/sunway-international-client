import PageBanner from "../shared/PageBanner/PageBanner";

const ServiceBanner = () => {
  return (
    <div>
      <PageBanner
        title={"Services"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard"
        }
        banner={"/Frame55.png"}
      ></PageBanner>
    </div>
  );
};

export default ServiceBanner;
