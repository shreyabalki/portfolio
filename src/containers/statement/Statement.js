import React from "react";
import {Fade} from "react-reveal";
import "./Statement.scss";

export default function Statement() {
  return (
    <Fade bottom duration={800} distance="20px">
      <section className="statement-section">
        <div className="statement-inner">
          <p className="statement-eyebrow">Mission</p>
          <h2 className="statement-headline">
            Design <span className="statement-x">×</span> Intelligence
            <br />
            <span className="statement-sub">Real-world impact.</span>
          </h2>
          <p className="statement-body">
            Building at the intersection of product thinking and machine
            learning — where clarity of design meets the precision of engineered
            systems.
          </p>
        </div>
      </section>
    </Fade>
  );
}
