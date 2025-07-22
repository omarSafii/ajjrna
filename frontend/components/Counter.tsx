export default function Counter() {
  return (
    <div className="counters-container flex w-full items-baseline justify-between bg-black px-[6.25rem]">
      <div className="counter-box flex flex-col items-center justify-center py-8 text-center">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          Good product
        </h2>
        <span className="font-jost text-[3.375rem] font-semibold text-white">
          246
        </span>
        <p className="max-w-[15.625rem] text-center font-jost text-base font-normal text-white">
          There are more than two hundred rentable products
        </p>
      </div>
      <div className="counter-box flex flex-col items-center justify-between py-8 text-center">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          Happy clients
        </h2>
        <span className="font-jost text-[3.375rem] font-semibold text-white">
          37K
        </span>
        <p className="max-w-[15.625rem] text-center font-jost text-base font-normal text-white">
          We have a large number of customers who are happy with our service
        </p>
      </div>
      <div className="counter-box flex flex-col items-center justify-between py-8 text-center">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          Expert agent
        </h2>
        <span className="font-jost text-[3.375rem] font-semibold text-white">
          69
        </span>
        <p className="max-w-[15.625rem] text-center font-jost text-base font-normal text-white">
          We have many agents around the Kingdom
        </p>
      </div>
      <div className="counter-box flex flex-col items-center justify-between py-8 text-center">
        <h2 className="font-montserrat text-lg font-semibold text-primary">
          Rated top
        </h2>
        <span className="font-jost text-[3.375rem] font-semibold text-white">
          9/10
        </span>
        <p className="max-w-[15.625rem] text-center font-jost text-base font-normal text-white">
          We have excellent high quality services as rated by our customers
        </p>
      </div>
    </div>
  );
}
