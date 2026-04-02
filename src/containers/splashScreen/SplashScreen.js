import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const HURDLES = [52, 112, 172];
const TRACK_WIDTH = 232;

const SEQ_X = [0, 36, 52, 72, 96, 112, 132, 156, 172, 192, 232];
const SEQ_Y = [0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0];
const TIMES = [0, 0.07, 0.13, 0.19, 0.26, 0.33, 0.39, 0.47, 0.53, 0.6, 0.85];

export default function SplashScreen() {
  const [animDone, setAnimDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimDone(true), 1650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!animDone && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950"
          initial={{opacity: 1}}
          exit={{
            opacity: 0,
            transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}
          }}
        >
          <div className="flex flex-col items-center gap-9">
            <div className="relative" style={{width: TRACK_WIDTH, height: 52}}>
              {/* Baseline */}
              <div
                className="absolute bottom-0 left-0 rounded-full bg-gray-100 dark:bg-gray-800"
                style={{width: TRACK_WIDTH, height: 1}}
              />

              {/* Hurdles */}
              {HURDLES.map(lx => (
                <motion.div
                  key={lx}
                  className="absolute bottom-0 rounded-full bg-gray-300 dark:bg-gray-600"
                  style={{left: lx - 1, width: 2, height: 20}}
                  initial={{scaleY: 0, originY: "bottom"}}
                  animate={{scaleY: 1}}
                  transition={{
                    delay: 0.12,
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
              ))}

              {/* Runner square */}
              <motion.div
                className="absolute rounded-sm"
                style={{
                  bottom: 2,
                  left: -5,
                  width: 10,
                  height: 10,
                  backgroundColor: "#4F86F7"
                }}
                animate={{x: SEQ_X, y: SEQ_Y.map(v => -v)}}
                transition={{
                  duration: 1.4,
                  ease: "linear",
                  times: TIMES,
                  delay: 0.28
                }}
              />
            </div>

            <motion.span
              className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300 dark:text-gray-600"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.45, duration: 0.4}}
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
