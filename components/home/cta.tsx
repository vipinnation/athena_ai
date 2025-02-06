import { Zap } from "lucide-react";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../ui/background-beam-collision";

export default function CTA() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="border-2  border-[#00a2ff]/20 rounded-lg py-6 flex flex-col items-center justify-center text-center space-y-8 shadow-[0_0_15px_rgba(0,162,255,0.1)]">
          <div className="relative">
            <div className="w-16 h-16 bg-black border-2 border-[#00a2ff]/50 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-[#00a2ff]" />
              <div className="absolute inset-0 bg-[#00a2ff]/20 blur-xl rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[#00a2ff] text-sm tracking-[0.2em] font-medium  leading-none">
              LETS START
            </p>

            <h1 className="dark:text-white text-2xl md:text-3xl  font-semibold max-w-4xl leading-none">
              Ready to Transform Your Business with AI?
            </h1>

            <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto leading-none">
              Let&apos;s discuss how our AI solutions can drive your success.
            </p>
          </div>

          <Link
            href="#"
            className="bg-black text-white px-8 py-3 rounded border border-[#00a2ff]/30 hover:border-[#00a2ff]/50 transition-colors tracking-wider text-sm tracking-[.75em]"
          >
            GET STARTED NOW
          </Link>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
