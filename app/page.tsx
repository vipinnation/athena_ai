import AIPromo from "@/components/home/ai_promo";
import CTA from "@/components/home/cta";
import ServiceSection from "@/components/home/service-section";
import { Technologies } from "@/components/home/technologies";
export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source
            src="https://res.cloudinary.com/divcixw4e/video/upload/v1738674764/bg_video_x3qayd.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h1 className="text-7xl font-light text-center max-w-5xl leading-tight text-white">
          Empowering Businesses with
          <br />
          <span className="text-sky-400 font-semibold">AI</span>-Driven Solutions
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white p-1">
            <div className="w-1 h-2 bg-white rounded-full mx-auto" />
          </div>
        </div>
      </div>
      {/* <main className="min-h-screen dark:bg-navy-900 text-white relative overflow-hidden">
        <ParticleBackground />

        <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <h1 className="text-7xl  font-medium text-center max-w-5xl leading-tight">
            Empowering Businesses with
            <br />
            <span className="text-sky-400">AI</span>-Driven Solutions
          </h1>

          <div className="absolute bottom-8 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white p-1">
              <div className="w-1 h-2 bg-white rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </main> */}

      <ServiceSection />
      <Technologies />
      <AIPromo />
      <CTA />
    </div>
  );
}
