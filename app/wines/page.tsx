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
  },
  {
    name: "2020 OFV Chardonnay",
    description1: "Limited quantity - 750ml",
    price: "$45.00",
  },
];

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto flex justify-around mt-5">
      <div className="">
        <h1 className="text-2xl font-bold italic">
          Cabernet Sauvignon - Oak Knoll
        </h1>
        <p className=" ml-1">
          Estate Grown and Produced, aged in our wine cave
        </p>
        {cabSauv.map((w) => {
          return (
            <div
              key={w.name}
              className="ml-5 border-b-2 rounded rounded-b-none p-4 pt-8 pb-8 hover:bg-sky-700 font-bold"
            >
              <p>
                &#x2022; {w.name} - {w.price && `${w.price}`}
              </p>
              <p>{w.description1}</p>
              {w.description2 && <p>{w.description2}</p>}
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-2xl font-bold italic">Chardonnay - Oak Knoll</h1>
        <p className="ml-1">Estate Grown and Produced</p>
      </div>
    </div>
  );
}
