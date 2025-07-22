export default function Metrics() {
  const metrics = [
    {
      title: "Good product",
      subTitle: "There are more than two hundred rentable products",
      value: "246",
    },
    {
      title: "Happy clients",
      subTitle: "We have a large number of customers who are happy with our service",
      value: "37K",
    },
    {
      title: "Expert agent",
      subTitle: "We have many agents around the Kingdom",
      value: "69",
    },
    {
      title: "Rated top",
      subTitle: "We have excellent high quality services as rated by our customers",
      value: "9/10",
    },
  ];
  return (
    <section className="bg-black py-16 text-white">
      <div className="container grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4 md:gap-4">
        {metrics.map(({ title, subTitle, value }) => (
          <div key={title}>
            <h3 className="font-montserrat text-lg font-semibold text-primary">{title}</h3>
            <span className="text-4xl">{value}</span>
            <p>{subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
