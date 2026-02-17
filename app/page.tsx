//import React from "react";

// TODO: use Next.js Image instead of img
"use client";
import { HeroBanner } from "./components/HeroBanner";
import { SectionTitle } from "./components/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useState, useEffect } from "react";

const carouselImages = [
  "https://raw.githubusercontent.com/tjbawc/tjbawc.github.io/main/images/bawc%20pic%201.png",
  "https://raw.githubusercontent.com/tjbawc/tjbawc.github.io/main/images/tj%20bawc%202.png",
];

function Carousel({ className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % carouselImages.length);
    }, 5000); // interval (ms)
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={carouselImages[index]}
          src={carouselImages[index]}
          alt={`slide ${index + 1}`}
          className="rounded-lg shadow-xl w-full h-128 object-cover border-4 border-white"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* optional prev/next controls */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1 rounded-full"
        onClick={() =>
          setIndex(
            (i) => (i - 1 + carouselImages.length) % carouselImages.length,
          )
        }
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-1 rounded-full"
        onClick={() => setIndex((i) => (i + 1) % carouselImages.length)}
      >
        ›
      </button>
    </div>
  );
}
const teamMembers = [
  {
    name: "James Lee",
    role: "President",
    imageUrl:
      "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/jamahes.jpg?raw=true",
  },
  {
    name: "Peter Le",
    role: "Social Media Manager",
    imageUrl:
      "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/temp%20pic.png?raw=true",
  },
  {
    name: "Chris Yang",
    role: "Game Dev",
    imageUrl:
      "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/chrisy.png?raw=true",
  },
  {
    name: "Matthew Bu",
    role: "Senior Tech Manager",
    imageUrl: "https://placehold.co/300x300/d1c7b7/5c5243?text=Matthew+B.",
  },
  {
    name: "Thomas Crosno",
    role: "Junior Web Dev",
    imageUrl:
      "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/thomar.png?raw=true",
  },
];

const MemberCard = ({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl: string;
}) => (
  <motion.div
    className="text-center bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-stone-200"
    whileHover={{ scale: 1.05, y: -8 }}
    transition={{ duration: 0.2 }}
  >
    <img
      className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-sm"
      src={imageUrl}
      alt={name}
    />
    <h3 className="text-2xl font-semibold text-stone-800 font-serif">{name}</h3>
    <p className="text-emerald-800 font-medium">{role}</p>
  </motion.div>
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center bg-stone-100 py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <SectionTitle>About Our Club</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            {}
            <Carousel />
          </div>
          <div className="md:w-1/2">
            <p className="text-stone-600 mb-6 text-lg leading-relaxed">
              Welcome to the TJ BAWC!
            </p>
            <p className="text-stone-600 mb-6 text-lg leading-relaxed">
              Come visit us Friday 8A to go birdwatching and learn more about
              the wildlife around you!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const OfficersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="officers"
      className="min-h-screen flex items-center justify-center bg-white py-32 px-6"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <SectionTitle>Officers</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map(({ name, role, imageUrl }, index) => (
            <MemberCard
              key={index}
              name={name}
              role={role}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeroBanner
        title="TJ Bird and Wildlife Club"
        imageUrl="https://i.imgur.com/qikIChd.jpeg"
        height={100}
      />
    </motion.section>
  );
};

const Page = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OfficersSection />
    </main>
  );
};

export default Page;
