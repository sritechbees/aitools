// pages/index.jsx (or app/page.jsx)

import CustomCursor from "./customcursor";


export default function Home() {
  return (
    <main>
      {/* Only inside this container the custom cursor will appear */}
      <section
        id="cursor-area"
        className="relative min-h-[520px] p-8 cursor-none" // cursor-none hides system cursor inside this area
      >
        <h1 className="text-5xl font-bold">The World Leading Distance Learning Provider</h1>
        {/* your content... */}
        <CustomCursor containerId="cursor-area" />
      </section>

      {/* other page content without custom cursor: native cursor stays */}
      <section className="p-8">
        <p>Other content — no custom cursor here.</p>
      </section>
    </main>
  );
}
