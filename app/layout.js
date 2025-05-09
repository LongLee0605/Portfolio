"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Nunito } from "next/font/google";
import Head from "next/head";
import { Fragment, useEffect, useState, useCallback } from "react";
import HeroBgAnimation from "./components/AnimationBG";
import { Contact as FormContact } from "./components/FormContact";
import TypeWriter from "./components/TypeWriter";
import {
  Bio,
  Skill,
  experiences,
  projectsNextJS,
  projectsWordpress,
} from "./data";
import "./globals.css";
import NextJS from "./components/CompanyProjects/NextJS";
import Wordpress from "./components/CompanyProjects/Wordpress";

const inter = Nunito({ subsets: ["latin"] });

export default function RootLayout({ ...props }) {
  const typeWriter = ["FrontEnd Developer", "Wordpress Developer"];
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = useCallback(() => {
    if (activeTab === "tab2")
      return <Wordpress projectsWordpress={projectsWordpress} />;
    return <NextJS projectsNextJS={projectsNextJS} />;
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jumpToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body className={inter.className}>
        {show && (
          <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
            <button
              onClick={jumpToTop}
              className="bg-[#432479] text-white rounded-full p-2 hover:bg-[#854ce6] transition duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        )}
        <section className="flex mx-auto max-w-[1920px] w-full relative flex-col lg:flex-row">
          {/* Left */}
          <div className="lg:h-screen lg:w-[400px] lg:min-w-[360px] w-full lg:p-10 lg:pr-4 px-5 pt-10 pb-5 mx-0 lg:mr-10 flex-col flex gap-3 relative lg:fixed left-0 top-0 justify-center">
            <HeroBgAnimation />
            <div className="flex justify-center">
              <img
                className="rounded-full w-44 object-cover h-44"
                src="./image/cvImage.png"
                alt="Avatar"
              />
            </div>
            <p className="text-4xl font-bold text-opacity-90">{Bio?.title}</p>
            <p className="flex text-xl font-bold text-opacity-90">
              I am a &nbsp;
              <TypeWriter data={typeWriter} />
            </p>
            <p className="text-base font-bold text-opacity-90">
              {Bio?.description}
            </p>
            {Bio?.menu?.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="text-xl font-bold text-opacity-90"
              >
                {item.title}
              </a>
            ))}
            <a
              href="https://www.hackerrank.com/certificates/d6f59345f207"
              className="text-xl font-bold text-opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate
            </a>
            <div className="flex place-content-evenly">
              {Bio?.social?.map((item) => (
                <a
                  href={item.url}
                  key={item.url}
                  className="rounded-full bg-white m-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.img}
                </a>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-3/4 mx-0 lg:ml-[400px] relative">
            <div
              id="skills"
              className="px-5 lg:py-10 py-5 text-center flex flex-col items-center justify-center"
            >
              <p className="text-3xl font-bold">SKILLS</p>
              <p className="text-lg font-bold pt-4 pb-8 px-3">
                Here are some of my skills on which I have been working on for
                the past 2 years.
              </p>
              <div className="flex gap-10 justify-center flex-wrap">
                {Skill?.map((item, index) => (
                  <div
                    key={item.title || index}
                    className="lg:min-w-[465px] shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 ease-in-out hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] px-4 pt-4 pb-8 rounded-3xl border-2 border-[#844ce696] w-full lg:w-[45%]"
                  >
                    <p className="text-xl font-bold text-center pb-4">
                      {item.title}
                    </p>
                    <div className="flex gap-3 flex-wrap justify-center">
                      {item?.data?.map((itemChild, indexChild) => (
                        <div
                          key={itemChild.title || indexChild}
                          className="flex gap-2 p-4 rounded-xl border-[1px]"
                        >
                          <img
                            src={itemChild?.img}
                            className="w-5 h-5"
                            alt={itemChild?.alt}
                          />
                          <p>{itemChild.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              id="experience"
              className="text-center px-0 lg:px-5 pt-5 pb-0 lg:py-10"
            >
              <p className="text-3xl font-bold">Experience</p>
              <p className="text-lg font-bold pt-4 pb-4 lg:pb-8 px-3">
                My work experience as a software engineer and working on
                different companies and projects.
              </p>
              <div className="hidden xl:block">
                <Timeline position="alternate" className="px-0">
                  {experiences.map((item, index) => (
                    <TimelineItem key={item.company + index}>
                      <TimelineOppositeContent
                        color="text-white"
                        className="mt-6"
                      >
                        {item.date}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="secondary" />
                        {index !== experiences.length - 1 && (
                          <TimelineConnector
                            style={{ background: "#854CE6" }}
                          />
                        )}
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "28px", px: 2 }}>
                        <div className="rounded-xl shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 ease-in-out hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] border-[#844ce696] p-6 justify-between flex relative flex-col gap-4 overflow-hidden">
                          <div className="w-full flex gap-4 items-center">
                            <img
                              className="w-12 h-12 p-1 bg-white rounded-lg "
                              src={item?.img}
                              alt={item?.alt}
                            />
                            <div className="flex flex-col items-start">
                              <p className="text-lg font-semibold text-left text-[#ffffff]">
                                {item?.role}
                              </p>
                              <p className="text-sm font-medium text-[#eff7ff]">
                                {item.company}
                              </p>
                              <p className="text-xs text-[#eaeaea80]">
                                {item?.date}
                              </p>
                            </div>
                          </div>
                          {item?.desc && (
                            <span className="text-[#f2f3f499] text-left">
                              {item?.desc}
                            </span>
                          )}
                          {item?.skills && (
                            <div className="flex gap-2">
                              <b className="text-[#f2f3f499]">Skills:</b>
                              <div className="flex flex-wrap gap-2">
                                {item?.skills?.map((skill, idx) => (
                                  <p
                                    key={skill + idx}
                                    className="text-[#f2f3f499]"
                                  >
                                    • {skill}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
              <div className="xl:hidden block">
                <Timeline>
                  {experiences.map((item, index) => (
                    <TimelineItem key={item.company + index}>
                      <TimelineOppositeContent
                        color="text-white"
                        className="hidden"
                      >
                        {item.date}
                      </TimelineOppositeContent>
                      <TimelineSeparator className="p-0">
                        <TimelineDot variant="outlined" color="secondary" />
                        {index !== experiences.length - 1 && (
                          <TimelineConnector
                            style={{ background: "#854CE6" }}
                          />
                        )}
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "28px", px: 2 }}>
                        <div className="rounded-xl shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 ease-in-out hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] border-[#844ce696] p-6 justify-between flex relative flex-col gap-4 overflow-hidden">
                          <div className="w-full flex gap-4 items-center">
                            <img
                              className="w-12 h-12 p-1 bg-white rounded-lg "
                              src={item?.img}
                              alt={item?.alt}
                            />
                            <div className="flex flex-col items-start">
                              <p className="text-lg font-semibold text-[#ffffff]">
                                {item?.role}
                              </p>
                              <p className="text-sm font-medium text-[#eff7ff]">
                                {item.company}
                              </p>
                              <p className="text-xs text-[#eaeaea80]">
                                {item?.date}
                              </p>
                            </div>
                          </div>
                          {item?.desc && (
                            <span className="text-[#f2f3f499] text-left">
                              {item?.desc}
                            </span>
                          )}
                          {item?.skills && (
                            <div className="flex gap-2">
                              <b className="text-[#f2f3f499]">Skills:</b>
                              <div className="flex flex-wrap gap-2">
                                {item?.skills?.map((skill, idx) => (
                                  <p
                                    key={skill + idx}
                                    className="text-[#f2f3f499]"
                                  >
                                    • {skill}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
            <div id="project" className="text-center px-5 py-5 lg:py-10">
              <p className="text-3xl font-bold">PROJECT</p>
              <p className="text-lg font-bold pt-4 pb-8 px-3">
                I have worked on a wide range of projects. Here are some of my
                projects.
              </p>
              <div>
                <div className="flex gap-5 pb-10 px-5">
                  <button
                    onClick={() => setActiveTab("tab1")}
                    className={`${
                      activeTab === "tab1"
                        ? "py-4 px-6 bg-[#854ce6] hover:bg-[#432479] transition duration-300 ease-in-out rounded"
                        : "py-4 px-6 bg-transparent hover:bg-[#432479] transition duration-300 ease-in-out rounded border-solid border-[1px] border-[#333]"
                    }`}
                  >
                    Company Projects
                  </button>
                  <button
                    onClick={() => setActiveTab("tab2")}
                    className={`${
                      activeTab === "tab2"
                        ? "py-4 px-6 bg-[#854ce6] hover:bg-[#432479] transition duration-300 ease-in-out rounded border-none"
                        : "py-4 px-6 bg-transparent hover:bg-[#432479] transition duration-300 ease-in-out rounded border-solid border-[1px] border-[#333]"
                    }`}
                  >
                    Outsource Projects
                  </button>
                </div>
                <div>{renderContent()}</div>
              </div>
            </div>
            <div id="contact" className="text-center py-5">
              <div>
                <p className="text-3xl font-bold pb-0 lg:pb-8">CONTACT ME</p>
              </div>
              <FormContact />
            </div>
            <div className="text-center text-lg py-10 border-t-[1px] px-3">
              <p>Built and designed by Le Tran Dang Long</p>
              <p>Copyright © 2024 All Rights Reserved</p>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
