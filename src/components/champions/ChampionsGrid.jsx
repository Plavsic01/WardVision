import { memo, useEffect } from "react";
import Champion from "./Champion";

const ChampionsGrid = ({ champions, scrollPosition }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }, 50);
  }, [scrollPosition]);

  return (
    <section className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      {champions.map((champion) => (
        <Champion key={champion.id} champion={champion} />
      ))}
    </section>
  );
};

export default memo(ChampionsGrid);
