import {useRef} from "react";
import {useInView} from "framer-motion";

/**
 * Returns a ref and a boolean `inView`.
 * Once the element enters the viewport it stays `true`.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "0px 0px -60px 0px", ...options});
  return {ref, inView};
}
