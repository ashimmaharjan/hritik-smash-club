import AnimatedHeading from "./animatedHeading";

import ChromaGrid from "@/components/magicui/chromaGrid";

import { smashers } from "../../lib/data/smashers";

const Smashers = () => {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-5">
      <AnimatedHeading title="The OGs" />

      <div className="h-fit">
        <ChromaGrid
          items={smashers}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default Smashers;
