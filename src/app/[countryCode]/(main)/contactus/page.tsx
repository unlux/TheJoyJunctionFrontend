import { Metadata } from "next";
import ContactForm from "@/modules/contactus/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - The Joy Junction",
  description: "We're here to help and answer any question you might have.",
};

export default function ContactUsPage() {
  return (
    <div className="bg-slate-100 min-h-screen py-12 sm:py-16 lg:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            We&apos;re here to help and answer any question you might have.
          </p>
        </div>
        <ContactForm /> {/* Render the client component here */}
      </div>
    </div>
  );
}
