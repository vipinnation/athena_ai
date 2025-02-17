import Image from "next/image";
import Banner from "@/assets/images/home.svg";

interface HeroSectionProps {
  primaryVideoSrc?: string;
  darkModeVideoSrc?: string;
  imageSrc?: string;
  title: string;
  titleClassName?: string;
  videoClassName?: string;
  containerClassName?: string;
}

const HomeVideo = ({
  primaryVideoSrc = "https://res.cloudinary.com/divcixw4e/video/upload/v1738674764/bg_video_x3qayd.mov",
  darkModeVideoSrc = "https://res.cloudinary.com/divcixw4e/video/upload/v1738769674/Comp_1_svd0ll.mp4",
  imageSrc,
  title,
  titleClassName = "text-2xl md:text-6xl font-light text-center max-w-5xl leading-tight dark:text-white uppercase tracking-[0.25em]",
  videoClassName = "absolute top-0 left-0 w-full h-full object-cover -z-10",
  containerClassName = "",
}: HeroSectionProps) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-[350px] px-4 sm:px-6 lg:px-8 ${containerClassName}`}
    >
      <video autoPlay loop muted playsInline className={videoClassName}>
        <source src={primaryVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className={`${videoClassName} dark:hidden`}
      >
        <source src={darkModeVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Banner Image */}
      <Image
        src={imageSrc || Banner}
        width={200}
        height={200}
        alt="Banner Image"
        className="absolute text-black"
      />

      {/* Title */}
      <h1 className={titleClassName}>{title}</h1>
    </div>
  );
};

export default HomeVideo;
