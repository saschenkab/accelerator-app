import * as React from "react";
import Header from "../components/Header";
import Community from "../components/Community";
import Features from "../components/Features";
import "../index.module.css";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Community />
      <Features />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
