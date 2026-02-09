import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import SoundWave from "@/components/SoundWave";
import CountdownTimer from "@/components/CountdownTimer";
import LeadCapture from "@/components/LeadCapture";
import PerformanceFooter from "@/components/PerformanceFooter";

const Index = () => {
  return (
    <div className="clay-canvas min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
      <main className="w-full max-w-xl flex flex-col items-center gap-10">
        {/* Mystery Box Icon */}
        <div className="fade-in-up delay-1 animate-float">
          <div className="neu-raised-lg rounded-3xl p-5 bg-accent">
            <Package size={40} className="text-primary" strokeWidth={2} />
          </div>
        </div>

        {/* Hero Capsule */}
        <div className="fade-in-up delay-2 neu-raised-lg rounded-[2rem] px-8 py-10 sm:px-12 sm:py-14 bg-card w-full flex flex-col items-center gap-6 text-center">
          <SoundWave />

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            The Tick that brings a Smile
          </h1>

          <h2 className="text-base sm:text-lg font-medium text-muted-foreground max-w-sm">
            A little wonder for your little wunderkind.
          </h2>
        </div>

        {/* Countdown */}
        <div className="fade-in-up delay-3 w-full flex justify-center">
          <CountdownTimer />
        </div>

        {/* Lead Capture */}
        <div className="fade-in-up delay-4 w-full">
          <LeadCapture />
        </div>

        {/* Footer */}
        <div className="fade-in-up delay-5 w-full pt-4">
          <PerformanceFooter />
        </div>

        {/* Contact Link */}
        <div className="fade-in-up delay-6 w-full text-center">
          <Link
            to="/contact"
            className="text-sm text-primary hover:underline font-medium transition"
          >
            Have a question? Get in touch
          </Link>
        </div>

        <p className="fade-in-up delay-6 text-xs text-muted-foreground">
          © 2026 Kindertick. Something wonderful is coming.
        </p>
      </main>
    </div>
  );
};

export default Index;
