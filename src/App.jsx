import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  const title = "Welcome To the blog";
  const likes = 500;
  return (
    <>
      <div className="app">
        <Navbar />
        <section className="content">
          <Home />
        </section>
      </div>
    </>
  );
}
