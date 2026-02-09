import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="clay-canvas min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
      <main className="w-full max-w-xl flex flex-col items-center gap-10">
        {/* Mail Icon */}
        <div className="fade-in-up delay-1 animate-float">
          <div className="neu-raised-lg rounded-3xl p-5 bg-accent">
            <Mail size={40} className="text-primary" strokeWidth={2} />
          </div>
        </div>

        {/* Contact Header */}
        <div className="fade-in-up delay-2 neu-raised-lg rounded-[2rem] px-8 py-10 sm:px-12 sm:py-14 bg-card w-full flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Get in Touch
          </h1>

          <h2 className="text-base sm:text-lg font-medium text-muted-foreground max-w-sm">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </h2>
        </div>

        {/* Contact Form */}
        <div className="fade-in-up delay-3 w-full">
          <ContactForm />
        </div>

        {/* Footer Contact Info */}
        <div className="fade-in-up delay-4 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Or reach out directly at:
          </p>
          <a
            href="mailto:contact@kindertick.com"
            className="text-primary font-semibold hover:underline"
          >
            contact@kindertick.com
          </a>
        </div>

        {/* Back to Home */}
        <div className="fade-in-up delay-5 w-full pt-4 text-center">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="fade-in-up delay-6 text-xs text-muted-foreground">
          © 2026 Kindertick. Something wonderful is coming.
        </p>
      </main>
    </div>
  );
};

export default Contact;
