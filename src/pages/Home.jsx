import { Link } from "react-router-dom";
import backgroundVideo from "../assets/video/hero-bg.mp4";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-black">
      <div className="mx-auto flex min-h-[100dvh] w-full max-w-md flex-col overflow-hidden bg-black sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Upper video section */}
        <section className="relative min-h-0 flex-1 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundVideo}
            autoPlay
            muted
            playsInline
            preload="metadata"
          />


          {/* Subtle bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </section>

        {/* Lower buttons section */}
        <section className="shrink-0 space-y-3 bg-black px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:space-y-4 sm:px-6 sm:py-7 md:px-8">
          <Link
            to="/users/signup"
            className="flex min-h-14 w-full items-center justify-center rounded bg-white px-5 py-3 text-lg font-bold leading-normal text-black transition active:scale-[0.98] sm:min-h-16 sm:rounded-2xl sm:text-xl"
          >
            Get Started
            <span className="ml-3 text-2xl font-bold">→</span>
          </Link>

          <Link
            to="/login"
            className="flex min-h-14 w-full items-center justify-center rounded border border-white px-5 py-3 text-lg font-semibold text-white transition active:scale-[0.98] hover:bg-white hover:font-bold hover:text-black sm:min-h-16 sm:rounded-2xl sm:text-xl"
          >
            Log In
          </Link>
        </section>
      </div>
    </main>
  );
}