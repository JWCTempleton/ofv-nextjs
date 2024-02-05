export default function Page() {
  return (
    <main className="mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center md:flex md:flex-row md:flex-1 gap-[2rem] md:gap-[3rem]">
        <div className="flex flex-col font-bold justify-center">
          <h1 className="text-xl my-3 text-purple-100">
            Contact Us and <br />
            Wine Sales
          </h1>
          <p>Olney Family Vineyards</p>
          <p>2253 Dry Creek Road</p>
          <p>Napa, California 94558</p>
          <p>Tel: 707-999-1795</p>
          <p>email: wine@ofv.com</p>
        </div>
        <form className="flex flex-col max-w-[30rem] md:max-w-[50rem] md:flex md:flex-row">
          <div className="flex md:flex md:flex-row">
            <div className="flex-1 ">
              <div className=" gap-4 mb-3 md:mt-3">
                <input
                  type="text"
                  id="name"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  id="email"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  id="subject"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Subject"
                  required
                ></input>
              </div>
              <div className=" gap-4">
                <input
                  type="tel"
                  id="telephone"
                  className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Telephone"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-3 flex-1 md:ml-4">
            <textarea
              id="large-input"
              className="w-full h-full p-4  rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 flex items-center justify-center"
              placeholder="Message"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="my-6 min-w-[400px] h-[325px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.8006929478656!2d-122.34207592486547!3d38.33044597185061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808500b48515a553%3A0x7994e7355c56ee7e!2sOlney%20Family%20Vineyard%2C%20Cave%20and%20Winery!5e0!3m2!1sen!2sus!4v1707113017835!5m2!1sen!2sus"
          className="border-none"
          loading="lazy"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
