"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f7f9fb] text-center px-6 relative overflow-hidden">
      {/* Floating Couch Animation */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="mb-10"
      >
        <Image
          src="/images/oops-not-found.png"
          alt="oops, again?!"
          width={280}
          height={180}
          className="rounded-2xl shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Funny 404 Text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-8xl font-extrabold text-[#002f61] mb-3"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
      >
        Oops! This page took a wrong turn at the upholstery shop.
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 max-w-md mx-auto mb-8"
      >
        We’ve looked under every cushion and behind every curtain...  
        but this page seems to have vanished. 🛋️✨
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/"
          className="inline-block bg-[#002f61] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#00448a] transition-all duration-300"
        >
          🏠 Take Me Home
        </Link>
      </motion.div>

      {/* Floating Text / Joke */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 text-sm text-gray-500 italic"
      >
        (We promise no sofas were harmed while finding this page.)
      </motion.div>

      {/* Background Blob */}
      <div className="absolute w-[400px] h-[400px] bg-[#002f61]/10 rounded-full blur-3xl top-10 left-10 -z-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#00448a]/10 rounded-full blur-2xl bottom-10 right-10 -z-10"></div>
    </section>
  );
}
