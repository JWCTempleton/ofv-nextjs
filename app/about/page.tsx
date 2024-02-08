import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className=" flex-1 relative mx-auto grid grid-cols-[1fr,_3fr] grid-rows-[minmax(500px,_1fr)] sm:grid-cols-[1fr,_3fr] grid-rows-1 sm:max-w-3xl gap-2 sm:gap-4 justify-center overflow-hidden">
        <div className="relative col-start-1 col-span-1 h-[85vh]">
          <Image
            src={"/about-img.jpg"}
            fill={true}
            style={{ objectFit: "cover", objectPosition: "40%" }}
            sizes="(max-width: 160px), (max-width: 190px)"
            alt="flowers"
            priority
          />
        </div>

        <div className="col-start-2 col-span-1 max-h-screen flex flex-col justify-center px-3 pt-1 sm:p-4 md:p-10 text-purple-100 h-full">
          <h1 className="font-bold sm:text-xl mb-2">Our 1996 beginning</h1>
          <p className="text-xs sm:text-base mb-2 sm:mb-3 leading-relaxed">
            Starting in 1996, We developed our Napa property and began
            culitivating Cabernet Sauvignon Wine Grapes, to produce ultra
            premium wines. Many years before our ownership, our property was a
            plum orchard that was left as grassland. We nurtured the soil to
            prepare it for wine grapes. The land had never grown wine grapes,
            which made it ideal for our vineyard. With the soil prepared we then
            choose and planted a little known grape vine from New York
            State&apos;s Hermann J. Wiemer&apos;s Vineyard, now locally known as
            the &quot;Wiemer Clone&quot;. The Wiemer grape vine grown here
            produces some of the highest quality fruit in Napa Valley.
          </p>
          <p className="text-xs sm:text-base leading-relaxed">
            In 2009 we graphed some newly planted rootstock to a special
            Chardonnay bud with lineage dating back to the exceptional and
            historic Wente Chardonnay clone. We released our first Chardonnay
            wine in 2014 and continue to release the best chardonnays Napa
            produces.
          </p>
        </div>
      </div>
    </main>
  );
}
