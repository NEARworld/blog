import React from "react";
import { Header, Post } from "components";
import { homeStyle } from "styles";

const Home = () => {
  const { div } = homeStyle;
  return (
    <div className={div.container}>
      <Header />
      <div className={div.postList}>
        {Array.from({ length: 5 }).map((item) => (
          <Post />
        ))}
      </div>
    </div>
  );
};

export default Home;
