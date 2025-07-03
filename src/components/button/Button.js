import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className = "",
  href = "#",
  newTab = false,
  download = false,
  onClick
}) {
  const combinedClass = `main-button ${className}`.trim();

  return (
    <div className={className}>
      <a
        className={combinedClass}
        href={href}
        onClick={onClick}
        {...(newTab ? {target: "_blank", rel: "noopener noreferrer"} : {})}
        {...(download ? {download: true} : {})}
      >
        {text}
      </a>
    </div>
  );
}
