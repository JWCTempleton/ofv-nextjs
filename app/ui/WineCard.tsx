export default function WineCard(wine: {
  name: string;
  price: string | null;
  description1: string;
  description2: string | undefined;
}) {
  return (
    <div
      key={wine.name}
      className="ml-5 border-b-2 rounded rounded-b-none p-4 pt-8 pb-8 hover:bg-sky-700 font-bold last:mb-8"
    >
      <p>
        &#x2022; {wine.name} - {wine.price && `${wine.price}`}
      </p>
      <p>{wine.description1}</p>
      {wine.description2 && <p>{wine.description2}</p>}
    </div>
  );
}
