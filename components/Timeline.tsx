"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {Download} from "lucide-react";
import {useTranslations} from "next-intl";

export default function Timeline() {
  const t = useTranslations("Timeline");

  const events = t.raw("events") as {
    year: string;
    title: string;
    desc: string;
  }[];

  const cta = t.raw("cta") as {
    title: string;
    description: string;
    button: string;
    link: string;
  };

  const containerRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="parcours"
      ref={containerRef}
      className="py-20 bg-black text-white relative"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 pt-14 gap-16">

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-mono text-green-500 mb-16">
            &gt; {t("title")}
          </h2>

          <div className="relative border-l border-green-900/50 ml-3">

            {/* Ligne animée */}
            <motion.div
              style={{height}}
              className="absolute top-0 -left-[1px] w-[2px] bg-green-500"
            />

            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15
                }}
                className="mb-16 ml-8"
              >
                <div className="absolute -left-[5px] mt-2 h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />

                <span className="font-mono text-green-500 text-sm">
                  {event.year}
                </span>

                <h3 className="text-xl font-bold mt-1">
                  {event.title}
                </h3>

                <p className="text-slate-400 font-mono text-sm mt-2">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carte CV */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.7}}
          className="md:sticky md:top-32 h-fit space-y-6"
        >
          <div className="p-8 bg-green-950/10 rounded-lg border border-green-900/30">

            <h3 className="text-2xl font-bold mb-4">
              {cta.title}
            </h3>

            <p className="text-slate-400 font-mono mb-8">
              {cta.description}
            </p>

            <motion.a
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(34,197,94,.45)"
              }}
              whileTap={{scale: 0.97}}
              href={cta.link}
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-black font-bold py-4 hover:bg-green-400 transition-colors font-mono"
            >
              <Download size={18} />
              {cta.button}
            </motion.a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}