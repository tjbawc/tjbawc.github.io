"use client";

import { HeroBanner } from "../components/HeroBanner";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const Entries = [
  {
    imageUrl: "https://i.imgur.com/njHroyT.jpeg",
    caption: "Canada Geese",
    author: "Thomas Crosno",
    date: "4/14/2025",
    loc: "Seattle, WA",
  },
];

// date will go with author (ex: "mat bu, Jan 2024")
const ScrapbookEntry = ({
  imageUrl,
  caption,
  author,
  date,
  loc,
}: {
  imageUrl: string;
  caption: string;
  author: string;
  date: string;
  loc: string;
}) => (
  <div className="m-4 p-4 border-2 border-stone-600 bg-white rounded-lg shadow-lg max-w-xs">
    <img
      src={imageUrl}
      alt={caption}
      className="w-full h-64 object-cover rounded-md"
    />
    <p className="mt-3 text-center text-sm text-stone-800 font-serif font-medium">
      {caption}
    </p>
    <p className="mt-3 text-center text-sm text-stone-600 font-serif font-medium">
      {author}, {date} at {loc}
    </p>
  </div>
);

const ScrapbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="scrapbook"
      className="py-20 bg-stone-100 flex min-h-[50vh] items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {Entries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
            {Entries.map(({ imageUrl, caption, author, date, loc }, index) => (
              <ScrapbookEntry
                key={index}
                imageUrl={imageUrl}
                caption={caption}
                author={author}
                date={date}
                loc={loc}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No scrapbook entries at the moment. Please check back later!
          </p>
        )}
      </div>
    </motion.section>
  );
};

const Scrapbook = () => {
  return (
    <main>
      <HeroBanner
        title="Scrapbook"
        subtitle="A collection of bird and wildlife community photographs."
        imageUrl="https://i.imgur.com/Rhtg6Os.jpeg"
        height={80}
      />
      <ScrapbookSection />
    </main>
  );
};

export default Scrapbook;
