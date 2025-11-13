"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs3DSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f5f7fa] to-[#e9eef3] py-24 overflow-hidden">
      {/* Background accent shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#002f61]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#002f61]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative">
        {/* LEFT IMAGE SECTION */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/gallery/custom-furniture-5-750x800.jpg"
              alt="Chinook Upholstery Team"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
            {/* <div className="absolute inset-0 bg-[#002f61]/40"></div> */}
          </div>
          <motion.div
            className="absolute -bottom-10 left-10 bg-white text-[#002f61] px-8 py-6 rounded-2xl shadow-lg max-w-[80%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-1">Crafted with Care</h4>
            <p className="text-sm text-gray-700">
              Every stitch, curve, and detail is made to perfection by our expert craftsmen.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }} 
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#002f61] mb-6">
            A Tradition of Excellence
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Since 1992, <strong>Chinook Upholstery, Drapery & Flooring</strong> has been a trusted
            name in Calgary for quality craftsmanship and elegant design. From custom furniture to
            upholstery, drapery, and flooring — we bring timeless comfort to every space.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With a passionate team of upholsterers, seamstresses, and designers, we combine
            traditional techniques with modern inspiration to transform homes and commercial spaces
            into something truly exceptional.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-[#002f61] mb-2">30+</h3>
              <p className="text-gray-700 text-sm font-medium">
                Years of Experience
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-[#002f61] mb-2">800+</h3>
              <p className="text-gray-700 text-sm font-medium">
                Fabric Samples Available
              </p>
            </div>
          </div>

          <motion.div
            className="mt-10 bg-[#002f61] text-white p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-3">Our Promise</h3>
            <p className="text-gray-200 leading-relaxed">
              To deliver personalized service, exceptional craftsmanship, and lasting quality in
              every project — ensuring your complete satisfaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
