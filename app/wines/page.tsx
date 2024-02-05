import WineCard from "../ui/WineCard";

const cabSauv = [
  {
    name: "2021 OFV Cab Sauv",
    description1: "Barrel aging - 750ml",
    price: null,
  },
  {
    name: "2020 OFV Cab Sauv",
    description1: "Bottling soon - 750ml",
    price: null,
  },
  {
    name: "2019 OFV Cab Sauv",
    description1: "Reserve - Extended Barrel",
    price: "$70.00",
  },
  {
    name: "2016 OFV Cab Sauv",
    description1: "Reserve - Extended Barrel",
    description2: "Aged - 750ml",
    price: "Sold Out",
  },
  {
    name: "2015 OFV Cab Sauv",
    description1: "Reserve - 750ml",
    price: "$70.00",
  },
  {
    name: "2014 OFV Cab Sauv",
    description1: "Estate - 750ml",
    price: "$70.00",
  },
  {
    name: "2013 OFV Cab Sauv",
    description1: "Limited quantity - 750ml",
    price: "$70.00",
  },
  {
    name: "2012 OFV Cab Sauv",
    description1: "Limited quantity - 750ml",
    price: "$70.00",
  },
];

const Chard = [
  {
    name: "2021 OFV Chardonnay",
    description1: "Bottling Soon - 750ml",
    price: null,
    description2: undefined,
  },
  {
    name: "2020 OFV Chardonnay",
    description1: "Limited quantity - 750ml",
    price: "$45.00",
  },
];

export default function Page() {
  return (
    <div className="md:max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex md:flex-row md:gap-[4rem] md:justify-center mt-5">
      <div className="flex flex-col max-w-max">
        <h1 className="text-2xl font-bold italic">
          Cabernet Sauvignon - <br />
          Oak Knoll
        </h1>
        <p className="ml-1">
          Estate Grown and Produced,
          <br />
          aged in our wine cave
        </p>
        {cabSauv.map((w) => {
          return (
            <WineCard
              key={w.name}
              name={w.name}
              price={w.price}
              description1={w.description1}
              description2={w.description2}
            />
          );
        })}
      </div>
      <div className="">
        <h1 className="text-2xl font-bold italic">Chardonnay - Oak Knoll</h1>
        <p className="ml-1">Estate Grown and Produced</p>
        {Chard.map((w) => {
          return (
            <WineCard
              key={w.name}
              name={w.name}
              price={w.price}
              description1={w.description1}
              description2={w.description2}
            />
          );
        })}
      </div>
    </div>
  );
}
