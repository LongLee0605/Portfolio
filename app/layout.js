"use client";
import { Nunito } from "next/font/google";
import TypeWriter from "./components/TypeWriter";
import HeroBgAnimation from "./components/AnimationBG";
import "./globals.css";
const inter = Nunito({ subsets: ["latin"] });

// data
const Bio = {
  title: "Hello, I'am D.Long",
  roles: ["FrontEnd Developer", "Wordpress Developer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  menu: [
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Experience",
      url: "#experience",
    },
    {
      title: "Project",
      url: "#project",
    },
  ],
  social: [
    {
      img: (
        <svg
          class="social-icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
      ),
      url: "https://www.facebook.com/leez.dlong",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
        </svg>
      ),
      url: "https://www.facebook.com/leez.dlong",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
        </svg>
      ),
      url: "https://www.facebook.com/leez.dlong",
    },
  ],
};
// skill
const Skills = {
  frontend: [
    {
      img: "../HTML.svg",
      title: "HTML",
    },
    {
      img: "../CSS.svg",
      title: "CSS",
    },
    {
      img: "../Javascript.svg",
      title: "Javascript",
    },
    {
      img: "../Bootstrap.svg",
      title: "Bootstrap",
    },
    {
      img: "../TailwindCSS.svg",
      title: "TailwindCSS",
    },
    {
      img: "../MaterialUI.svg",
      title: "MaterialUI",
    },
    {
      img: "../Wordpress.svg",
      title: "Wordpress",
    },
    {
      img: "../Elementor.svg",
      title: "Elementor",
    },
    {
      img: "../React.svg",
      title: "React",
    },
    {
      img: "../NextJS.svg",
      title: "NextJS",
    },
  ],
  backend: [
    {
      img: "../PHP.svg",
      title: "PHP",
    },
    {
      img: "../Postman.svg",
      title: "Postman",
    },
    {
      img: "../MongoDB.svg",
      title: "MongoDB",
    },
    {
      img: "../MySQL.svg",
      title: "MySQL",
    },
    {
      img: "../Cpanel.svg",
      title: "Cpanel",
    },
    {
      img: "../Firebase.svg",
      title: "Firebase",
    },
    {
      img: "../GraphQL.svg",
      title: "GraphQL",
    },
  ],
  orther: [
    {
      img: "../AWS.svg",
      title: "AWS",
    },
    {
      img: "../Figma.svg",
      title: "Figma",
    },
    {
      img: "../Git.svg",
      title: "Git",
    },
    {
      img: "../Github.svg",
      title: "Github",
    },
    {
      img: "../VSCode.svg",
      title: "VSCode",
    },
    {
      img: "../Ant.svg",
      title: "Ant Design",
    },
  ],
};
export default function RootLayout({ ...props }) {
  const typeWriter = ["FrontEnd Developer", "Wordpress Developer"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex mx-auto max-w-[1920px] w-full relative">
          {/* Left */}
          <div className="w-1/3 mx-10 flex-col flex gap-6 fixed left-0 top-0 h-[100vh] justify-center">
            <HeroBgAnimation />
            <div className="flex justify-center mt-14">
              <img
                className="rounded-full w-60"
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/393140572_2623161251192783_8996118009379949440_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHUu0G-KQ4wvJPv-_PsuWvM-EstlBYZRkP4Sy2UFhlGQ9_ENlGvUqBiDYBxzVpVFH3kfatL-JuUn4exRWlO2QzN&_nc_ohc=PvkT5iovfZkAb4g8bLa&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCFCOloiUWzp3OstqoZg-a11vuR_JyrxSuPicGslHCmzQ&oe=661AC836"
              />
            </div>
            <p className="text-4xl font-bold text-opacity-90">{Bio.title}</p>
            <p className="flex text-xl font-bold text-opacity-90">
              I'm a &nbsp;
              <TypeWriter data={typeWriter} />
            </p>
            <p className="text-base font-bold text-opacity-90">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>
            {Bio.menu.map((item) => {
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
              {Bio.social.map((item) => {
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
          <div className="w-2/3 ml-[43%] relative">
            <div
              id="skills"
              className="px-5 py-10 text-center flex flex-col items-center justify-center h-[100vh]"
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
              <div className="flex gap-10 justify-between ">
                <div className="shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] px-4 pt-4 pb-8 rounded-3xl border-2 border-[#844ce696] w-1/2 ">
                  <p className="text-xl font-bold text-center pb-4">FrontEnd</p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    {Skills.frontend.map((item) => {
                      return (
                        <div
                          key={item}
                          className="flex gap-2 p-4 rounded-xl border-[1px]"
                        >
                          <img src={item.img} className="w-5 h-5" />
                          <p>{item.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] px-4 pt-4 pb-8 rounded-3xl border-2 border-[#844ce696] w-1/2 ">
                  <p className="text-xl font-bold text-center pb-4">BackEnd</p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    {Skills.backend.map((item) => {
                      return (
                        <div
                          key={item}
                          className="flex gap-2 p-4 rounded-xl border-[1px]"
                        >
                          <img src={item.img} className="w-5 h-5" />
                          <p>{item.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-10 shadow-[0_15px_30px_rgba(133,_76,_230,_0.4)] px-4 pt-4 pb-8 rounded-3xl border-2 border-[#844ce696] w-1/2 ">
                <p className="text-xl font-bold text-center pb-4">Orther</p>
                <div className="flex gap-3 flex-wrap justify-center">
                  {Skills.orther.map((item) => {
                    return (
                      <div
                        key={item}
                        className="flex gap-2 p-4 rounded-xl border-[1px]"
                      >
                        <img src={item.img} className="w-5 h-5" />
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div id="experience" className="h-[1000px]">
              Kinh nghiệm
            </div>
            <div id="project" className="h-[1000px]">
              ákdad
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
