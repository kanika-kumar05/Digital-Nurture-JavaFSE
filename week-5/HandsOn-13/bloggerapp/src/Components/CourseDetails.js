import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "React",
      duration: "45 Days"
    },
    {
      id: 2,
      name: "Node.js",
      duration: "30 Days"
    }
  ];

  return (
    <div>

      <h2>Course Details</h2>

      {courses.map(course => (
        <div key={course.id}>
          <p><b>Course:</b> {course.name}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default CourseDetails;