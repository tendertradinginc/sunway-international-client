import Image from "next/image";

const Assembly = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-si-primary md:text-5xl">
        Assembly Workshop
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="">
          <Image
            className="h-[250px] lg:h-[400px]"
            src="https://i.postimg.cc/vTKqv5tW/34-1-scaled-1.webp"
            alt="Assembly Workshop Image 1"
            height={400}
            width={1400}
          />
        </div>
        <div>
          <Image
            className="h-[250px] lg:h-[400px]"
            src="https://i.postimg.cc/NMHkwZ6r/Assembling-Workshop-the-hall-800x500.jpg"
            alt="Assembly Workshop Image 2"
            height={800}
            width={1400}
          />
        </div>
      </div>
      <p className="mt-5 font-medium text-si-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tenetur
        eum magnam, commodi harum dolor qui dolorum perspiciatis placeat,
        explicabo minima aut est reiciendis. Cum, exercitationem necessitatibus?
        Saepe dignissimos non repellat facere, deserunt aliquam, alias ea nobis
        accusantium nihil mollitia dolores ipsa odit dicta inventore dolorem nam
        voluptatem culpa natus? Eveniet totam ex quisquam expedita reiciendis
        nam nulla neque, amet ut molestias corrupti earum quae maxime cumque et
        deserunt iusto! Voluptatum aut corporis vitae architecto dolorum nemo at
        quaerat id consectetur neque.
      </p>
    </div>
  );
};

export default Assembly;
