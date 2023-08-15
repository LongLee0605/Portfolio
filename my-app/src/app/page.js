export default function Home() {
  return (
    <>
      {/* left */}
      <div className="w-[40%] p-10 lg:p-15 flex flex-col gap-10 fixed inset-0">
        <h2 className="text-2xl lg:text-6xl font-bold text-white text-opacity-95">
          Hello, I’m Sudeep.
        </h2>
        <p>
          I’m the founder and CEO at Shepherd Games. I develop video games, and
          mobile and web applications. I can't stop developing the stuff, it has
          become a habit later a profession. You may contact me at <br />
          <a
            className="text-white text-opacity-95 underline underline-offset-1"
            href="mailto:letrandanglong.0605@gmail.com"
          >
            letrandanglong.0605@gmail.com
          </a>
        </p>
        <div className="flex flex-col gap-8">
          <button className="text-left font-bold text-xl text-white text-opacity-80">
            <a href="#first-section">01.  </a>
          </button>
          <button className="text-left font-bold text-xl text-white text-opacity-80">
            02.{" "}
          </button>
          <button className="text-left font-bold text-xl text-white text-opacity-80">
            03.{" "}
          </button>
        </div>
      </div>
      {/* right */}
      <div className="w-[calc(100%-40%)] float-right p-10 lg:p-15 h-[4000px]">
        <section id="first-section">
          <div className="bg-gray-12 brightness-150 w-3/4 p-6 mx-auto hover:duration-300 hover:scale-110 mb-4">
            <p>ádddd</p>
          </div>
          <div className="bg-gray-12 brightness-150 w-3/4 p-6 mx-auto hover:duration-300 hover:scale-110 mb-4">
            <p>ádddd</p>
          </div>
          <div className="bg-gray-12 brightness-150 w-3/4 p-6 mx-auto hover:duration-300 hover:scale-110 mb-4">
            <p>ádddd</p>
          </div>
          <div className="bg-gray-12 brightness-150 w-3/4 p-6 mx-auto hover:duration-300 hover:scale-110">
            <p>ádddd</p>
          </div>
        </section>
      </div>
    </>
  );
}
