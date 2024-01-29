"use client";
import { Input } from "postcss";
import React, { FC, useState } from "react";
import Typed from "typed.js";

interface TyperProps {
  onComplete: () => void;
}

export const Typer: FC<TyperProps> = ({ onComplete }) => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  const inConstructionMessage = [
    "Hello",
    "did you find this site by mistake?",
    "If yes, ignore",
    "Otherwise, stay tuned and do not tell anyone",
    "namely, Jay",
  ];

  const iGotTheNug = [
    "Hey sweetie, looks like you found the first nugget.",
    "One of potentially many!",
    "Not much to explain about this except it’s my way of leaving you random nuggets when you least expect it.",
    "And if you’re reading this, I can assume you’ve moved onto packing your room and you have cleared your shelf.",
    "I just wanted to tell you how much I am proud of you.",
    "Life ain’t easy but you manage to show up for your loved ones by moving home and for youself by pursuing and investing in a new career.",
    "I’m sure this week will be a busy one however there is one thing you must do for me before you leave St. Pete.",
    "But first, text me, “I got the nug” that way I know you’ve read this. No need to ask questions. There will be a follow up reply from me.",
  ];

  const greetingMessage = [
    "Why hello onion bat.",
    "Before I type on,",
    "whatever you do, do not tell me (Jay) that you found this",
    "And to make sure I know it’s you. Answer this question!",
    "What’s the name of the cat who hates you and all other Jess’s in this world?",
  ];

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: iGotTheNug,
      typeSpeed: 50,
      // onComplete: () => {
      //   console.log("complete"), onComplete();
      // },
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App p-4">
      <span ref={el} />
    </div>
  );
};
