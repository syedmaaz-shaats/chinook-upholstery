"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://your-email-api.netlify.app/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else throw new Error("Error sending message");
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        slug={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        backgroundImage="/images/gallery/custom-upholstery-14-1400x800.jpg"
        fixedBg={true}
      />

      <section className="bg-white py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#002f61] mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or want to start a new project? We’d love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#f8f9fb] rounded-2xl shadow-lg p-8 md:p-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5">
                <label className="block text-[#002f61] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002f61] outline-none"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[#002f61] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002f61] outline-none"
                />
              </div>

              <div className="mb-5">
                <label className="block text-[#002f61] font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#002f61] outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#002f61] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#00448a] transition-all w-full md:w-auto"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-[#002f61] mt-4 font-medium">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 mt-4 font-medium">Something went wrong. Try again.</p>
              )}
            </motion.form>

            {/* Contact Info (unchanged) */}
            <motion.div
              className="relative bg-gradient-to-br from-[#002f61] via-[#013e85] to-[#001a38] text-white rounded-2xl shadow-2xl p-10 md:p-12 flex flex-col justify-center overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_70%)]"></div>
              <h3 className="relative text-3xl font-bold mb-8 border-b border-white/20 pb-4 tracking-wide">
                Contact Information
              </h3>
              <a href="tel:+14032550673" className="relative group flex items-start mb-6 transition-all">
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-lg">Phone</p>
                  <p className="text-gray-300 group-hover:text-white transition">(403) 255-0673</p>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/K2x6ESniSCjR3TPU6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-start mb-6 transition-all"
              >
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-lg">Address</p>
                  <p className="text-gray-300 group-hover:text-white transition leading-relaxed">
                    D6 6115 3 St SE, Calgary, AB T2H 1K1
                  </p>
                </div>
              </a>
              <div className="relative flex items-start mb-6">
                <div className="p-3 rounded-full bg-white/10">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-lg">Hours</p>
                  <p className="text-gray-300 leading-relaxed">
                    Mon–Fri: 9:00 am – 5:30 pm
                    <br />
                    Sat: 10:00 am – 5:00 pm
                    <br />
                    <span className="italic">Closed Sun & Holidays</span>
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@chinookupholstery.com"
                className="relative group flex items-start transition-all"
              >
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-gray-300 group-hover:text-white transition">
                    info@chinookupholstery.com
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            className="mt-20 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.022998561651!2d-114.04113842390498!3d50.99724714784394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371708c3a400e4d%3A0xcd1064f8681193e9!2sChinook%20Upholstery%2C%20Drapery%20Flooring%20Ltd.!5e0!3m2!1sen!2sin!4v1762424665544!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
