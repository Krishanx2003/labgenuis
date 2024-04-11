"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"

export function MovingCards() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    "quote": "Artificial intelligence will reach human levels by around 2029. Follow that out further to, say, 2045, we will have multiplied the intelligence, the human biological machine intelligence of our civilization a billion-fold.",
    "name": "Ray Kurzweil",
    "title": "Futurist"
  },
  {
    "quote": "Machine learning is the science of getting computers to act without being explicitly programmed.",
    "name": "Andrew Ng",
    "title": "Computer Scientist"
  },
  {
    "quote": "The best minds of my generation are thinking about how to make people click ads.",
    "name": "Jeff Hammerbacher",
    "title": "Data Scientist"
  },
  {
    "quote": "Data is the new oil. It’s valuable, but if unrefined it cannot really be used. It has to be changed into gas, plastic, chemicals, etc., to create a valuable entity that drives profitable activity; so must data be broken down, analyzed for it to have value.",
    "name": "Clive Humby",
    "title": "Data Scientist"
  },
  {
    "quote": "The goal of AI is to enable computers to learn, reason, and perceive the way humans do.",
    "name": "Amit Ray",
    "title": "Author"
  },
  {
    "quote": "Artificial intelligence would be the ultimate version of Google. The ultimate search engine that would understand everything on the web. It would understand exactly what you wanted, and it would give you the right thing. We’re nowhere near doing that now. However, we can get incrementally closer to that, and that is basically what we work on.",
    "name": "Larry Page",
    "title": "Co-founder of Google"
  },
  {
    "quote": "Data really powers everything that we do.",
    "name": "Jeff Weiner",
    "title": "Executive Chairman of LinkedIn"
  },
  {
    "quote": "We’re entering a new world in which data may be more important than software.",
    "name": "Tim O'Reilly",
    "title": "Founder of O'Reilly Media"
  },
  {
    "quote": "I am so excited about the future of AI, in particular the area of machine learning. This is going to be the foundation of virtually every industry going forward.",
    "name": "Jensen Huang",
    "title": "CEO of NVIDIA"
  },
  {
    "quote": "By far, the greatest danger of artificial intelligence is that people conclude too early that they understand it.",
    "name": "Eliezer Yudkowsky",
    "title": "Researcher"
  }
]
