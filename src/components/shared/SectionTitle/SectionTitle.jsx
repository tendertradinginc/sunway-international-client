const SectionTitle = ({ title1, title2, cn }) => {
  return (
    <div>
      <h1
        className={`mb-12 text-3xl font-semibold text-si-primary md:text-5xl ${cn}`}
      >
        {title1} <span className="text-[#fbbf24]"> {title2}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
