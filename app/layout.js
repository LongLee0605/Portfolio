"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Nunito } from "next/font/google";
import HeroBgAnimation from "./components/AnimationBG";
import TypeWriter from "./components/TypeWriter";
import { Bio, Skill, Skills, experiences, projects } from "./data";
import "./globals.css";
const inter = Nunito({ subsets: ["latin"] });

export default function RootLayout({ ...props }) {
  const typeWriter = ["FrontEnd Developer", "Wordpress Developer"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex mx-auto max-w-[1920px] w-full relative flex-col lg:flex-row">
          {/* Left */}
          <div className="lg:w-[400px] lg:min-w-[360px] w-full p-10 mx-0 lg:mr-10 flex-col flex gap-6 relative lg:fixed left-0 top-0 justify-center">
            <HeroBgAnimation />
            <div className="flex justify-center mt-14">
              <img
                className="rounded-full w-60"
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/393140572_2623161251192783_8996118009379949440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUu0G-KQ4wvJPv-_PsuWvM-EstlBYZRkP4Sy2UFhlGQ9_ENlGvUqBiDYBxzVpVFH3kfatL-JuUn4exRWlO2QzN&_nc_ohc=PvkT5iovfZkAb4g8bLa&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCFCOloiUWzp3OstqoZg-a11vuR_JyrxSuPicGslHCmzQ&oe=661AC836"
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
            {Bio?.menu.map((item) => {
              return (
                <a
                  key={item}
                  href={item.url}
                  className="text-xl font-bold text-opacity-90"
                >
                  {item.title}
                </a>
              );
            })}
            <div className="flex">
              {Bio?.social.map((item) => {
                return (
                  <a
                    href={item.url}
                    key={item}
                    className="rounded-full bg-white m-3"
                  >
                    {item.img}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-3/4 mx-0 lg:ml-[400px] relative">
            <div
              id="skills"
              className="px-5 py-10 text-center flex flex-col items-center justify-center"
            >
              <p
                className="
              text-3xl font-bold"
              >
                SKILLS
              </p>
              <p
                className="
              text-lg font-bold pt-4 pb-8"
              >
                Here are some of my skills on which I have been working on for
                the past 2 years.
              </p>
              <div className="flex gap-10 justify-center flex-wrap">
                {Skill?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] px-4 pt-4 pb-8 rounded-3xl border-2 border-[#844ce696] w-full lg:w-[45%] "
                    >
                      <p className="text-xl font-bold text-center pb-4">
                        {item.title}
                      </p>

                      <div className="flex gap-3 flex-wrap justify-center">
                        {item?.data?.map((itemChild, indexChild) => {
                          return (
                            <div
                              key={indexChild}
                              className="flex gap-2 p-4 rounded-xl border-[1px]"
                            >
                              <img src={itemChild.img} className="w-5 h-5" />
                              <p>{itemChild.title}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="experience" className="text-center px-0 lg:px-5 py-10">
              <p
                className="
              text-3xl font-bold"
              >
                Experience
              </p>
              <p
                className="
              text-lg font-bold pt-4 pb-8"
              >
                My work experience as a software engineer and working on
                different companies and projects.
              </p>
              <div className="hidden lg:block">
                <Timeline position="alternate" className="px-0">
                  {experiences.map((item, index) => {
                    return (
                      <TimelineItem key={index}>
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
                          <div
                            className="rounded-xl shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] border-[#844ce696] p-6 justify-between
                      flex relative flex-col gap-4 overflow-hidden"
                          >
                            <div className="w-full flex gap-4 items-center">
                              <img
                                className="w-12 h-12 p-1 bg-white rounded-lg "
                                src={item?.img}
                              />
                              <div className="flex flex-col items-start">
                                <p className="text-lg font-semibold text-[#f2f3f499]">
                                  {item?.role}
                                </p>
                                <p className="text-sm font-medium text-[#b1b2b399]">
                                  {item.company}
                                </p>
                                <p className="text-xs text-[#b1b2b380]">
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
                              <>
                                <div className="flex gap-2">
                                  <b className="text-[#f2f3f499]">Skills:</b>
                                  <div className="flex flex-wrap gap-2">
                                    {item?.skills?.map((skill, index) => {
                                      return (
                                        <p
                                          key={index}
                                          className="text-[#f2f3f499]"
                                        >
                                          • {skill}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
              </div>
              <div className="lg:hidden block">
                <Timeline>
                  {experiences.map((item, index) => {
                    return (
                      <TimelineItem key={index}>
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
                          <div
                            className="rounded-xl shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] hover:-translate-y-3 duration-200 hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] border-[#844ce696] p-6 justify-between
                      flex relative flex-col gap-4 overflow-hidden"
                          >
                            <div className="w-full flex gap-4 items-center">
                              <img
                                className="w-12 h-12 p-1 bg-white rounded-lg "
                                src={item?.img}
                              />
                              <div className="flex flex-col items-start">
                                <p className="text-lg font-semibold text-[#f2f3f499]">
                                  {item?.role}
                                </p>
                                <p className="text-sm font-medium text-[#b1b2b399]">
                                  {item.company}
                                </p>
                                <p className="text-xs text-[#b1b2b380]">
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
                              <>
                                <div className="flex gap-2">
                                  <b className="text-[#f2f3f499]">Skills:</b>
                                  <div className="flex flex-wrap gap-2">
                                    {item?.skills?.map((skill, index) => {
                                      return (
                                        <p
                                          key={index}
                                          className="text-[#f2f3f499]"
                                        >
                                          • {skill}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    );
                  })}
                </Timeline>
              </div>
            </div>
            <div id="project" className="text-center px-5 py-10">
              <p
                className="
              text-3xl font-bold"
              >
                PROJECT
              </p>
              <p
                className="
              text-lg font-bold pt-4 pb-8"
              >
                I have worked on a wide range of projects. Here are some of my
                projects.
              </p>
              <div className="flex gap-10 flex-wrap justify-around">
                {projects?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group w-full md:w-[45%] lg:w-[45%] xl:w-[30%] cursor-pointer rounded-lg shadow-[0_0_12px_4px_rgba(133,_76,_230,_0.2)] overflow-hidden p-6 flex flex-wrap gap-8 hover:-translate-y-3 brightness-110 duration-200 hover:shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)]"
                    >
                      <img
                        src={item?.image}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <div className="w-full flex items-center flex-wrap gap-2 mt-2 h-12 justify-center">
                        {item?.tags?.map((tag) => (
                          <p
                            key={tag}
                            className="text-xs py-1 px-2 text-[#854ce6] bg-[#854ce615] rounded-lg "
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      <div className="w-full flex flex-col">
                        <p className="text-xl font-semibold text-[#b1b2b3] line-clamp-2">
                          {item?.title}
                        </p>
                        <p className="text-xs text-[#b1b2b380]">{item?.date}</p>
                        <p className="mt-2 line-clamp-3 text-[#b1b2b399]">
                          {item?.description}
                        </p>
                      </div>
                      <a
                        href={item?.webapp}
                        target="_blank"
                        className="px-6 py-4 text-[#b1b2b399] group-hover:text-white"
                      >
                        View Website
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
