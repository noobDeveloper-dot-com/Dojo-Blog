import { useState } from "react";
import Navbar from "./Navbar";

export default function App() {
  const title = "Welcome To the blog";
  const likes = 500;
  return (
    <>
      <div className="app">
        <Navbar />
        <section className="content">
          <h1>{title}</h1>
          <p>Likes: {likes}</p>
        </section>
      </div>
    </>
  );
}
