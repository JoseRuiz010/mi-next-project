"use client";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const navigate = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minus
        id ipsa voluptate saepe, dicta optio molestias dolore consectetur dolor
        rem aspernatur, tempore necessitatibus magni laudantium placeat
        explicabo repudiandae. Ad.
      </p>
      <button
        onClick={() => navigate.push("/")}
        className="bg-blue-500 p-2 rounded-md m-4"
      >
        Siguiente
      </button>
    </section>
  );
};

export default About;
