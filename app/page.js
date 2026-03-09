"use client";
import { useState, useEffect } from "react";
import { nodes } from "./data/flowchart";

export default function Home() {
  const [answer, setAnswer] = useState("root");
  const [endingCount, setEndingCount] = useState(null);
  const qns = nodes[answer];

  {
    /* adding counter logic */
  }
  const handleStartOver = () => {
    setAnswer("root");
    setEndingCount(null);
  };

  useEffect(() => {
    if (!qns?.answer) return;

    async function recordEnding() {
      const res = await fetch("/api/endings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endingId: answer }),
      });
      const data = await res.json();
      setEndingCount(data.count);
    }

    recordEnding();
  }, [answer]);

  const btnClass =
    "px-4 py-2 bg-blue-500 text-white rounded-md m-2 hover:bg-blue-600 transition-colors";

  if (qns.answer) {
    return (
      <div className="w-screen h-screen flex flex-col overflow-x-hidden">
        {/* logo */}
        <div className="flex flex-col items-end">
          {" "}
          <h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="text-[34vw] md:text-[20vw] leading-[0.85] md:leading-none tracking-tighter md:tracking-tight w-full text-center whitespace-normal md:whitespace-nowrap overflow-hidden text-[#E64833] px-0"
          >
            ARE YOU COOKED?
          </h1>
          <p className="text-[#244855] text-sm md:text-2xl tracking-[0.1em] md:tracking-[0.2em] uppercase font-mono mt-[-1rem] md:mt-[-2rem] pl-1">
            100% accurate. 0% helpful.
          </p>
          <p className="fixed bottom-4 right-4 text-sm opacity-50">By U76_98</p>
        </div>
        {/* body */}
        <div className="flex flex-col px-[5%] md:px-[10%] mt-10 md:mt-20">
          <p className="font-mono text-2xl md:text-5xl text-[#244855] tracking-wide mb-4">
            {qns.answer}
          </p>
          <p className="font-mono text-base md:text-xl text-[#244855] tracking-wide mb-4">
            {qns.by}
          </p>
          <p className="font-mono text-sm md:text-base text-[#244855] opacity-50 mb-6">
            {endingCount === null
              ? "..."
              : endingCount === 1
                ? "You're the first person to get this ending!"
                : `${endingCount.toLocaleString()} people have gotten this ending`}
          </p>
          <div className="font-mono flex gap-3 text-xl md:text-3xl space-x-2 md:space-x-5">
            <button className="btn-yes" onClick={handleStartOver}>
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      {/* logo */}
      <div className="flex flex-col items-end">
        {" "}
        <h1
          style={{ fontFamily: "var(--font-bebas)" }}
          className="text-[34vw] md:text-[20vw] leading-[0.85] md:leading-none tracking-tighter md:tracking-tight w-full text-center whitespace-normal md:whitespace-nowrap overflow-hidden text-[#E64833] px-0"
        >
          ARE YOU COOKED?
        </h1>
        <p className="text-[#244855] text-sm md:text-2xl tracking-[0.1em] md:tracking-[0.2em] uppercase font-mono mt-[-1rem] md:mt-[-2rem] pl-1">
          100% accurate. 0% helpful.
        </p>
        <p className="fixed bottom-4 right-4 text-sm opacity-50">By U76_98</p>
      </div>
      {/* body */}
      <div className="flex flex-col px-[5%] md:px-[10%] mt-10 md:mt-20">
        <p className="font-mono text-2xl md:text-5xl text-[#244855] tracking-wide mb-4">
          {qns.question}
        </p>
        <div className="flex gap-3 text-xl md:text-3xl space-x-2 md:space-x-5">
          <button className="btn-yes" onClick={() => setAnswer(qns.yes)}>
            Yes
          </button>
          <button className="btn-no" onClick={() => setAnswer(qns.no)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
