import React from "react";
import css from "./FeedbackOptions.module.css";
const FeedbackOptions = ({ onHandleClick }) => {
  return (
    <div className="buttonBox">
      <button
        className={css.btn}
        onClick={onHandleClick}
        type="button"
        name="good"
      >
        GOOD
      </button>
      <button
        className={css.btn}
        onClick={onHandleClick}
        type="button"
        name="neutral"
      >
        NEUTRAL
      </button>
      <button
        className={css.btn}
        onClick={onHandleClick}
        type="button"
        name="bad"
      >
        BAD
      </button>
    </div>
  );
};

export default FeedbackOptions;
