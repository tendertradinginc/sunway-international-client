import MedicalEquipmentCard from "../MedicalEquipmentCard/MedicalEquipmentCard";

const MedicalEquipmentCardMeta = ({ data }) => {

  return (
    <div>
      <title>{data?.productName}</title>
      <meta
        name="description"
        content={`${data.shortDescription.slice(0, 100)} ...`}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={data?.productName} />
      <meta
        property="og:description"
        content={`${data.shortDescription.slice(0, 100)} ...`}
      />
      <meta property="og:image" content={data.images[0]} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.twintradeint.com/medical-equipment/${data?.category}/${data?._id}`}
      />
      <MedicalEquipmentCard
        data={data}
        navigateTo={`/medical-equipment/${data?.category}/${data?._id}`}
      />
    </div>
  );
};

export default MedicalEquipmentCardMeta;
