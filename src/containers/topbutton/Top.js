import React, {useEffect} from "react";
import "./Top.scss";

export default function Top() {
  const scrollFunction = () => {
    const topBtn = document.getElementById("topButton");
    if (!topBtn) return;

    // Add class 'show' to button when scroll position is greater than 20px
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  };

  const TopEvent = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", scrollFunction);

    // Call scrollFunction initially to check scroll position
    scrollFunction();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button onClick={TopEvent} id="topButton" title="Go to top">
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
}
