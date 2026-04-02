import React, {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

/*
  Premium loader: a small square "runner" that clears three minimal hurdles,
  symbolising problem-solving in an engineering context.
  Inspired by Google's playful loaders — reinterpreted as calm and minimal.
*/

const HURDLES = [52, 112, 172]; // px from left where hurdles sit
const TRACK_WIDTH = 232; // total track width px

// Keyframe x/y sequence for the runner
const SEQ_X = [0, 36, 52, 72, 96, 112, 132, 156, 172, 192, 232];
const SEQ_Y = [0, 0, 20, 0, 0, 20, 0, 0, 20, 0, 0]; // positive = up (Framer inverts)
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{opacity: 1}}
          exit={{
            opacity: 0,
            transition: {duration: 0.5, ease: [0.22, 1, 0.36, 1]}
          }}
        >
          <div className="flex flex-col items-center gap-9">
            {/* Track */}
            <div className="relative" style={{width: TRACK_WIDTH, height: 52}}>
              {/* Baseline */}
              <div
                className="absolute bottom-0 left-0 bg-gray-100 rounded-full"
                style={{width: TRACK_WIDTH, height: 1}}
              />

              {/* Hurdles */}
              {HURDLES.map(lx => (
                <motion.div
                  key={lx}
                  className="absolute bottom-0 bg-gray-300 rounded-full"
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

            {/* Label */}
            <motion.span
              className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-300"
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
