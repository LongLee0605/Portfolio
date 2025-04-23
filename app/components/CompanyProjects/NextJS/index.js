import { useEffect, useState, useRef } from "react";

function NextJS({ projectsNextJS }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-between">
        {projectsNextJS?.map((item, index) => (
          <div
            key={index}
            className="group w-full md:w-[45%] cursor-pointer rounded-lg shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] overflow-hidden hover:-translate-y-3 brightness-110 duration-200 ease-in-out hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)]"
          >
            <a
              href={item.webapp || `#project-${item.id || index}`}
              aria-label={`Xem chi tiết dự án ${item.title}`}
              onClick={(e) => {
                e.preventDefault();
                openModal(item);
              }}
              className="px-6 py-8 flex flex-wrap gap-6"
            >
              <img
                src={item?.image}
                className="w-full h-60 object-cover rounded object-top"
                alt={item?.alt || `Hình ảnh demo dự án ${item.title}`}
              />
              <div className="w-full flex items-center flex-wrap gap-2 mt-2 h-12 justify-center">
                {item?.tags?.map((tag) => (
                  <p
                    key={tag}
                    className="text-xs py-1 px-2 text-[#ffffff] bg-[#8554db15] rounded-lg"
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
                <p className="mt-2 text-[#b1b2b3]">{item?.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            className="bg-[#252525] p-6 rounded-lg lg:w-4/6 w-11/12 shadow-lg relative"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-600"
              aria-label="Đóng thông tin dự án"
            >
              ✕
            </button>
            <div className="flex content-center items-center lg:gap-10 gap-4 lg:flex-row flex-col">
              <div className="lg:w-1/3 w-full justify-center flex">
                <img
                  src={selectedProject.image}
                  className="w-full lg:h-auto h-60 object-cover rounded object-top"
                  alt={selectedProject.alt || `Hình ảnh demo dự án ${selectedProject.title}`}
                />
              </div>
              <div className="lg:w-2/3 w-full text-neutral-900 h-[42vh]">
                <div className="w-full flex items-center flex-wrap gap-2 my-2 h-12 justify-center">
                  {selectedProject?.tags?.map((tag) => (
                    <p
                      key={tag}
                      className="text-xs py-1 px-2 text-[#ffffff] bg-[#8554db15] rounded-lg"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="w-full flex flex-col flex-wrap gap-2 my-4">
                  <p
                    id="modal-title"
                    className="text-xl font-semibold text-[#b1b2b3] line-clamp-2"
                  >
                    {selectedProject?.title}
                  </p>
                  <p className="text-xs text-[#b1b2b380]">
                    {selectedProject?.date}
                  </p>
                  <div
                    className="mt-2 text-[#b1b2b3] text-left lg:h-[25vh] h-[20vh] overflow-y-auto modal-content"
                    dangerouslySetInnerHTML={{ __html: selectedProject?.ido }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={selectedProject?.webapp}
                className="py-4 px-6 bg-transparent hover:bg-[#432479] transition duration-300 ease-in-out rounded"
                aria-label={`Xem website dự án ${selectedProject.title}`}
              >
                <button>View Website</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NextJS;
