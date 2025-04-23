export const metadata = {
  metadataBase: new URL("https://letrandanglong.vercel.app"),
  title: "Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân",
  description:
    "Khám phá portfolio của Lê Trần Đăng Long – Junior Frontend Developer. Chuyên về ReactJS, NextJS, Typescript, HTML, CSS, JavaScript, TailwindCSS, MaterialUI, Wordpress, Elementor, GraphQL, Vercel. Đã thực chiến tại MaskCodex, Allgrow Labo, Gleads Việt Nam, TMD, Nam Long SoftWare. Xem dự án nổi bật, kỹ năng, kinh nghiệm và liên hệ hợp tác.",
  keywords: [
    "Lê Trần Đăng Long",
    "Junior Frontend Developer",
    "Portfolio cá nhân",
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
    "Dự án lập trình viên",
    "Kinh nghiệm Frontend",
    "Tuyển dụng lập trình viên",
    "Portfolio Developer",
    "Web Developer Portfolio",
  ],
  openGraph: {
    title: "Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân",
    description:
      "Portfolio của Lê Trần Đăng Long – Junior Frontend Developer. Nổi bật với các dự án ReactJS, NextJS, Typescript, cùng kinh nghiệm thực chiến tại MaskCodex, Allgrow Labo, Gleads Việt Nam, TMD, Nam Long SoftWare.",
    url: "https://letrandanglong.vercel.app/",
    siteName: "Lê Trần Đăng Long Portfolio",
    images: [
      {
        url: "https://letrandanglong.vercel.app/image/cvImage.png",
        alt: "Ảnh đại diện portfolio Lê Trần Đăng Long – Junior Frontend Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lê Trần Đăng Long – Junior Frontend Developer | Portfolio cá nhân",
    description:
      "Khám phá các dự án, kỹ năng và kinh nghiệm nổi bật của Lê Trần Đăng Long – Junior Frontend Developer.",
    images: ["https://letrandanglong.vercel.app/image/cvImage.png"],
  },
  alternates: {
    canonical: "https://letrandanglong.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

import RootLayout from "./layout";

export default function Home() {
  return <RootLayout />;
}
