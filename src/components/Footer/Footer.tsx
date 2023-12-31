import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.Component}>
      <div className={css.footer}>
        <span className={css.title}>Developer: </span>
        <span className={css.name}>Lidiya Kocherzchuk</span>
      </div>
    </div>
  );
};

export { Footer };
