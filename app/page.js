import Head from "next/head";
import RootLayout from "./layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân
        </title>
        <meta
          name="description"
          content="Portfolio của Lê Trần Đăng Long – Junior Frontend Developer. Kỹ năng ReactJS, NextJS, Typescript, HTML, CSS, JavaScript, cùng các dự án thực tế và kinh nghiệm tại MaskCodex, Allgrow Labo, Gleads Việt Nam, TMD, Nam Long SoftWare."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân"
        />
        <meta
          property="og:description"
          content="Khám phá các dự án, kỹ năng và kinh nghiệm của Lê Trần Đăng Long – Junior Frontend Developer chuyên về ReactJS, NextJS, Typescript."
        />
        <meta property="og:url" content="https://letrandanglong.vercel.app/" />
        <meta property="og:site_name" content="Lê Trần Đăng Long Portfolio" />
        <meta
          property="og:image"
          content="https://letrandanglong.vercel.app/cvImage.png"
        />
        <meta
          property="og:image:alt"
          content="Ảnh đại diện portfolio Lê Trần Đăng Long"
        />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân"
        />
        <meta
          name="twitter:description"
          content="Portfolio của Lê Trần Đăng Long – Junior Frontend Developer. Kỹ năng ReactJS, NextJS, Typescript, HTML, CSS, JavaScript, cùng các dự án thực tế."
        />
        <meta
          name="twitter:image"
          content="https://letrandanglong.vercel.app/cvImage.png"
        />
        <link rel="canonical" href="https://letrandanglong.vercel.app/" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lê Trần Đăng Long",
              jobTitle: "Junior Frontend Developer",
              url: "https://letrandanglong.vercel.app/",
              email: "letrandanglong.0605@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Quận 12",
                addressRegion: "TP.HCM",
                addressCountry: "Việt Nam",
              },
              sameAs: [
                "https://github.com/LongLee0605",
                "https://www.linkedin.com/in/le-tran-dang-long/",
              ],
              image: "https://letrandanglong.vercel.app/cvImage.png",
              description:
                "Portfolio cá nhân của Lê Trần Đăng Long – Junior Frontend Developer với kỹ năng ReactJS, NextJS, Typescript, HTML, CSS, JavaScript, cùng kinh nghiệm thực tế tại MaskCodex, Allgrow Labo, Gleads Việt Nam, TMD, Nam Long SoftWare.",
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Trường Cao đẳng Công nghệ Thông tin Thành Phố Hồ Chí Minh",
                },
              ],
              knowsAbout: [
                "ReactJS",
                "NextJS",
                "Typescript",
                "HTML",
                "CSS",
                "JavaScript",
                "TailwindCSS",
                "MaterialUI",
                "Wordpress",
                "Elementor",
                "GraphQL",
                "Vercel",
              ],
            }),
          }}
        />
      </Head>
      <RootLayout />
    </>
  );
}
