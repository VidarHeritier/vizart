import RandomImg from "./welcomeImg";
import Button from "./loginlink";
import Main from "./main";
import Header from "./header";

import React from "react";

const Home = () => {
  return (
    <div>
      <Main>
        <Header></Header>
        <div className="flex flex-col items-center justify-center">
          <Button />
        </div>
        <div className="flex flex-col items-center justify-center py-20">
          <RandomImg />
        </div>
        <div>
          <p className="text-center text-amber-100">The Visual Art Hive</p>
        </div>
      </Main>
    </div>
  );
};

export default Home;
