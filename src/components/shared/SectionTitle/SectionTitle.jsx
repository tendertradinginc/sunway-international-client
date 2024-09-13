export default function SectionTitle({ title, description }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 text-center">
      <h2 className="mb-6 lg:text-5xl text-4xl font-bold text-si-primary">{title}</h2>
      <p className="mx-auto max-w-3xl text-base lg:text-lg text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
