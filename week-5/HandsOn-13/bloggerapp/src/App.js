import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const choice = "book"; // Change to "blog" or "course"

  if (choice === "book") {
    return <BookDetails />;
  }

  else if (choice === "blog") {
    return <BlogDetails />;
  }

  else {
    return <CourseDetails />;
  }

}

export default App;