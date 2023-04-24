import data from "./data";
import University from "./University";

export default function Universities() {
  return (
    <section className="mt-10 2xl:mx-24">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center lg:text-4xl text-[#111b2e] xl:text-5xl mb-2">Universities</h2>
        <p className="mx-4 mb-2 text-center md:w-[60%] lg:w-1/2 lg:text-xl 2xl:mb-10">
          With a lot of tertiary institutions situated all over the nation, here
          are some of the top universities in Ghana and some brief information
          on these reputable institutions of higher education.
        </p>
        <div className="mx-4 grid grid-cols-1 gap-y-10">
          {data &&
            data.map((university) => (
              <University
                key={university.id}
                name={university.name}
                description={university.description}
                image={university.image}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
