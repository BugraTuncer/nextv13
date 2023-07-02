"use client";
import React from "react";
import dynamic from "next/dynamic";
import AboutPage from "../about/page";

const LazyLoadPage = () => {
  const [showMore, setShowMore] = React.useState<boolean>(false);

  return (
    <div>
      Lazy Load Page
      <br />
      <button
        onClick={() => {
          setShowMore(true);
        }}
      >
        {" "}
        Show More
      </button>
      {showMore && <AboutPage />}
    </div>
  );
};

export default LazyLoadPage;
