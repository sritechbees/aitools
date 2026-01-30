"use client";
import { useEffect, useRef } from "react";

type CustomCursorProps = {
  containerId?: string;
};

export default function CustomCursor({
  containerId = "cursor-area",
}: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const last = useRef({ x: 0, y: 0 });
  const visible = useRef(false);
  const rafRef = useRef<number | null>(null);

  // simple linear interpolation
  const lerp = (a: number, b: number, n: number) =>
    (1 - n) * a + n * b;

  useEffect(() => {
    const container =
      typeof window !== "undefined"
        ? document.getElementById(containerId) || document.body
        : null;

    if (!container) return;

    // Show on enter / hide on leave
    const handleEnter = () => {
      visible.current = true;
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
      if (outerRef.current) outerRef.current.style.opacity = "0.9";
    };

    const handleLeave = () => {
      visible.current = false;
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (outerRef.current) outerRef.current.style.opacity = "0";
    };

    const handleMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // snap small dot to cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // ensure visible
      handleEnter();
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    container.addEventListener("mousemove", handleMove);

    // animation loop to smoothly move outer ring
    const animate = () => {
      last.current.x = lerp(last.current.x, pos.current.x, 0.16);
      last.current.y = lerp(last.current.y, pos.current.y, 0.16);

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${last.current.x}px, ${last.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("mousemove", handleMove);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [containerId]);

  return (
    <>
      {/* small red dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-3 h-3 rounded-full bg-red-500 z-[9999] opacity-0 transition-opacity duration-150"
        style={{
          transform: "translate3d(-9999px,-9999px,0)",
          top: 0,
          left: 0,
        }}
        aria-hidden
      />

      {/* outer ring */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed w-9 h-9 rounded-full z-[9998] opacity-0 border-2 border-red-300"
        style={{
          transform: "translate3d(-9999px,-9999px,0)",
          top: 0,
          left: 0,
          transition: "width 120ms ease, height 120ms ease, opacity 160ms ease",
        }}
        aria-hidden
      />
    </>
  );
}
