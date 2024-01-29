"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";
import { Typer } from "@/components/Typer";
import { Form } from "@/components/Form";

export const dynamic = "force-dynamic";

export default function Home() {
  const [isGreetingDone, setisGreetingDone] = useState(false);

  const handleOnComplete = () => {
    setisGreetingDone(true);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center home ">
      <Typer onComplete={handleOnComplete} />
      {isGreetingDone && <Form />}
    </main>
  );
}
