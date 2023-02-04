import React from "react";
import { postStyle } from "styles";

export const Post = () => {
  const { div } = postStyle;

  return (
    <div className={div.container}>
      <div className={div.topContainer}>
        <h1>Post title..</h1>
        <div>02. 04. 2023</div>
      </div>
      <div className={div.bottomContainer}>Post content..</div>
    </div>
  );
};
