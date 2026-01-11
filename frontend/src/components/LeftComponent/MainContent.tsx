import React from "react";
import StudentsJoinedCard from "./StudentsJoinedCard";

const MainContent: React.FC = () => {
  return (
    <div
      className="
        flex flex-col
        px-6 sm:px-10 lg:px-20
        py-12 sm:py-16 lg:py-24
        max-w-xl
      "
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-8 h-8 mr-2"
          src="https://f1000research-files.f1000.com/thumbnails/1fd5d5a9-20f0-4670-adfa-0e49fcbaa58e_collection.thumbnail"
          alt="logo"
        />
        <h3 className="text-white text-2xl font-semibold">K-Folio</h3>
      </div>

      {/* Headline */}
      <div className="space-y-2 mt-12 text-white font-bold text-5xl leading-tight">
        <h1>Connect.</h1>
        <h1>Share.</h1>
        <h1 className="text-blue-600">Grow.</h1>
      </div>

      {/* Description */}
      <div className="my-7 text-white/60 text-lg max-w-md">
        <p>
          Join the K-Folio community to share your college experiences and
          connect with students across campus.
        </p>
      </div>

      {/* Students Joined */}
      <StudentsJoinedCard />
    </div>
  );
};

export default MainContent;
