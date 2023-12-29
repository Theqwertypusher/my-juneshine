"use client";
import { Input } from "postcss";
import React, { useState } from "react";
import Typed from "typed.js";

export function Typer() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  const greetingMessage = [
    "Why hello onion bat.",
    "Before I type on,",
    "whatever you do, do not tell me (Jay) that you found this",
    "And to make sure I know it’s you. Answer this question!",
    "What’s the name of the cat who hates you and all other Jess’s in this world?",
  ];

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: greetingMessage,
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
