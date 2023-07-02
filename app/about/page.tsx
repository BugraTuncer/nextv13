"use client";
import React from "react";

const delay = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const AboutPage = () => {
  //  await delay(3000);
  return <div>AboutPage</div>;
};

export default AboutPage;
