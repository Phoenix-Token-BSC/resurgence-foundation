'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import aboutIcon from "/public/images/charity-01.png"
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { number: "2+", label: "Events Held" },
  { number: "500+", label: "Lives Impacted" },
  { number: "2", label: "States Reached" },
  { number: "100%", label: "Volunteer Driven" },
];

const cards = [
  {
    title: "Donate",
    desc: "Your contribution funds our projects and establishes a solid foundation for lasting change.",
    href: "/donate",
    icon: (
      <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#ffffff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    ),
  },
  {
    title: "Volunteer",
    desc: "Join passionate volunteers to help organize events, spread awareness, and bring initiatives to life.",
    href: "/involve",
    icon: (
      <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path fill="#ffffff" d="M544 248l0 3.3 69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5L296 64c-37.1 0-67.6 28-71.6 64l-.4 0 0 120c0 22.1 17.9 40 40 40s40-17.9 40-40l0-72c0 0 0-.1 0-.1l0-15.9 16 0 136 0c0 0 0 0 .1 0l7.9 0c44.2 0 80 35.8 80 80l0 8zM336 192l0 56c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-118.6c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8l0-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z" />
      </svg>
    ),
  },
  {
    title: "Spread the Word",
    desc: "Share our mission with your network to help us reach more people and grow our impact.",
    href: "/",
    icon: (
      <svg className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#ffffff" d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75l-8.7 0-32 0-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4L480 32zm-64 76.7L416 240l0 131.3C357.2 317.8 280.5 288 200.7 288l-8.7 0 0-96 8.7 0c79.8 0 156.5-29.8 215.3-83.3z" />
      </svg>
    ),
  },
];

export default function Home() {
  const containerRef1 = useRef(null);
  const controls1 = useAnimation();
  const containerRef2 = useRef(null);
  const controls2 = useAnimation();

  const firstEventPublic = Array.from({ length: 14 }, (_, i) => ({
    src: `/images/first-event/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `First event ${i + 1}`,
  }));

  const secondEventPublic = Array.from({ length: 14 }, (_, i) => ({
    src: `/images/second-event/${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Second event ${i + 1}`,
  }));

  useEffect(() => {
    if (containerRef1.current) {
      const totalWidth = containerRef1.current.scrollWidth / 2;
      controls1.start({
        x: [0, -totalWidth],
        transition: { ease: "linear", duration: 30, repeat: Infinity },
      });
    }
  }, [controls1]);

  useEffect(() => {
    if (containerRef2.current) {
      const totalWidth = containerRef2.current.scrollWidth / 2;
      controls2.start({
        x: [0, -totalWidth],
        transition: { ease: "linear", duration: 30, repeat: Infinity },
      });
    }
  }, [controls2]);

  return (
    <div className="bg-neutral-900 text-white">
      <Header />
      <main>

        {/* Hero */}
        <div
          className="h-screen relative"
          style={{
            backgroundImage: "url(/images/bgg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/65" />
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 md:px-16"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase text-neutral-300 mb-4">
              Resurgence Foundation
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-bold text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight mb-6">
              Empowering Individuals &amp; Communities
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-neutral-300 text-base md:text-lg mb-8">
              We provide vital support to those in need during times of crisis and empower communities
              with access to technology — building brighter, sustainable futures one person at a time.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link
                className="bg-white text-neutral-900 px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-colors"
                href="/donate"
              >
                Donate Now
              </Link>
              <Link
                className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
                href="/involve"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 text-neutral-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="bg-neutral-800 border-y border-neutral-700">
          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-700"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex flex-col items-center py-8 px-4 text-center">
                <span className="text-3xl md:text-4xl font-bold">{s.number}</span>
                <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Who we are */}
        <motion.div
          className="bg-neutral-900 pt-20 pb-32 px-8 md:px-24 flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-12 relative overflow-hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bottom-0 md:bottom-auto md:right-0 md:translate-x-1/2 pointer-events-none select-none">
            <Image
              src="/images/cha-bg1.png"
              fill
              className="object-contain opacity-10"
              alt=""
              sizes="(max-width: 768px) 800px, 1200px"
              priority
            />
          </div>
          <motion.div variants={fadeUp} className="relative z-10 max-w-xl">
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">About us</p>
            <h2 className="font-bold text-3xl md:text-4xl pb-4">Who We Are</h2>
            <p className="text-neutral-300 leading-relaxed">
              At Resurgence Foundation, we are a humanitarian organization committed to making a lasting
              impact in the lives of those affected by disasters and socio-economic challenges. With a
              deep sense of empathy and innovation, we strive to bridge the gap between urgent relief
              efforts and long-term sustainability. Our team is dedicated to providing life-saving
              assistance during times of crisis while tackling one of Africa&apos;s greatest challenges —
              the lack of access to essential technology. Through hands-on relief work and technological
              empowerment, we uplift communities by delivering solutions that address immediate needs
              while laying the foundation for future growth and resilience.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="w-full md:w-[28rem] aspect-square relative z-10 flex-shrink-0">
            <Image
              src={aboutIcon}
              fill
              className="object-contain p-8 md:p-0"
              alt="about icon"
              sizes="(max-width: 768px) 100vw, 28rem"
            />
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="py-28 px-8 md:px-24 bg-gradient-to-b from-neutral-700 to-neutral-900 relative overflow-hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/mission-bg.png"
              fill
              className="object-cover opacity-10"
              alt=""
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Our Purpose</motion.p>
            <motion.h2 variants={fadeUp} className="font-bold text-3xl md:text-4xl pb-6">Our Mission</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 text-neutral-300 leading-relaxed">
              <p>
                Our mission is to extend a helping hand to those in need during times of disaster,
                providing immediate relief and long-term recovery. We work tirelessly to restore dignity,
                hope, and opportunities to affected individuals and communities.
              </p>
              <p>
                Beyond disaster relief, we are passionate about closing the digital divide in Africa,
                ensuring that underserved communities have access to technology and education that can
                transform lives and unlock new possibilities. By leveraging innovation, collaboration,
                and compassion, we aim to build a world where every person has the tools and support
                they need to thrive — no matter their circumstances.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Events */}
        <motion.section
          className="flex flex-col gap-16 md:px-16 my-16 mx-4 p-6 md:p-16 border border-neutral-700 rounded-3xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp} className="border-b border-neutral-700 pb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2 gap-1">
              <h2 className="text-xl md:text-2xl font-bold">First Donation Event: City of Refuge Foundation</h2>
              <span className="text-sm text-neutral-400 flex-shrink-0">Dec. 20, 2024</span>
            </div>
            <p className="pb-4 text-sm text-neutral-400 max-w-2xl leading-relaxed">
              We went to the City of Refuge Foundation at Ilorin, Kwara State — a self-funded Orphanage Home
              for Orphans and Vulnerable Children. We shared food and cash resources and are happy to have
              spoken with the children.
            </p>
            <button className="border border-neutral-600 text-white px-6 py-2 mb-8 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors">
              Read more
            </button>
            <div className="relative w-full overflow-hidden">
              <motion.div ref={containerRef1} className="flex gap-4 md:gap-6" animate={controls1}>
                {[...firstEventPublic, ...firstEventPublic].map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 relative rounded-xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-2 gap-1">
              <h2 className="text-xl md:text-2xl font-bold">Second Donation Event: OOLG Nursery &amp; Primary School I</h2>
              <span className="text-sm text-neutral-400 flex-shrink-0">Oct. 14, 2025</span>
            </div>
            <p className="pb-4 text-sm text-neutral-400 max-w-2xl leading-relaxed">
              We were able to share bags and school materials to the needy pupils of OOLG Nursery &amp; Primary
              School I, Obantoko, Abeokuta, Nigeria.
            </p>
            <button className="border border-neutral-600 text-white px-6 py-2 mb-8 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors">
              Read more
            </button>
            <div className="relative w-full overflow-hidden">
              <motion.div ref={containerRef2} className="flex gap-4 md:gap-6" animate={controls2}>
                {[...secondEventPublic, ...secondEventPublic].map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-64 md:w-80 h-48 md:h-64 relative rounded-xl overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 256px, 320px"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Why we need you */}
        <motion.section
          className="md:px-16 my-16 mx-4 p-6 md:p-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={fadeUp} className="text-xs tracking-widest uppercase text-neutral-400 mb-2">Get Involved</motion.p>
          <motion.h2 variants={fadeUp} className="font-bold text-3xl md:text-4xl pb-2">Why We Need You</motion.h2>
          <motion.p variants={fadeUp} className="pb-8 text-neutral-400 max-w-xl">
            As a growing organization, your support is critical to helping us fulfill our mission.
            Here is how you can make a difference:
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 flex flex-col gap-3"
              >
                <div className="w-11 h-11 bg-neutral-700 rounded-xl flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{card.desc}</p>
                <Link
                  href={card.href}
                  className="text-sm font-medium text-white underline underline-offset-4 mt-auto hover:text-neutral-300 transition-colors"
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      <footer className="border-t border-neutral-800 px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h2 className="font-bold text-xl mb-1">Resurgence Foundation</h2>
          <p className="text-sm text-neutral-400">Empowering individuals &amp; Communities.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-neutral-400">
          <span className="font-semibold text-white uppercase tracking-wider text-xs mb-1">Quick Links</span>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/involve" className="hover:text-white transition-colors">Get Involved</Link>
          <Link href="/donate" className="hover:text-white transition-colors">Donate</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-semibold text-white uppercase tracking-wider text-xs">Follow Us</span>
          <a href="https://x.com/rf_org" className="hover:opacity-70 transition-opacity">
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
