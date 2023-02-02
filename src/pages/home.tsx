import React from "react";
import { useLoaderData } from "react-router-dom";
import { Header } from "routes/router";

const Home = () => {
  const { main } = useLoaderData() as Header;
  return (
    <div>
      {main}
      <div>Home</div>
    </div>
  );
};

export default Home;
