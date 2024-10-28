function Wordpress({ projectsWordpress }) {
  return (
    <>
      <div className="flex gap-10 flex-wrap justify-between">
        {projectsWordpress?.map((item, index) => {
          return (
            <div
              key={index}
              className="group w-full md:w-[45%] lg:w-[45%] xl:w-[30%] cursor-pointer rounded-lg shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] overflow-hidden  hover:-translate-y-3 brightness-110 duration-200 ease-in-out hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)]"
            >
              <a
                href={item?.webapp}
                target="_blank "
                className=" px-6 py-8 flex flex-wrap gap-8"
              >
                <img
                  src={item?.image}
                  className="w-full h-40 object-cover rounded-lg"
                  alt={item?.alt}
                />
                <div className="w-full flex items-center flex-wrap gap-2 mt-2 h-12 justify-center">
                  {item?.tags?.map((tag) => (
                    <p
                      key={tag}
                      className="text-xs py-1 px-2 text-[#ffffff] bg-[#8554db15] rounded-lg "
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="w-full flex flex-col flex-wrap gap-1">
                  <p className="text-xl font-semibold text-[#b1b2b3] line-clamp-2">
                    {item?.title}
                  </p>
                  <p className="text-xs text-[#b1b2b380]">{item?.date}</p>
                  <p className="mt-2 line-clamp-3 text-[#b1b2b3]">
                    {item?.description}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Wordpress;
