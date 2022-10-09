export const filterSelected = (selected, courses) => {
  let rows;
  if (selected === "Announcements")
    rows = courses
      ?.map((course) =>
        course?.announcements?.map((i) => {
          return { ...i, course_name: course.name, type: "Announcement" };
        }),
      )
      .filter((i) => i)
      .flat(1);
  if (selected === "Assignments")
    rows = courses
      ?.map((course) =>
        course?.assignments?.map((i) => {
          return { ...i, course_name: course.name, type: "Assignment" };
        }),
      )
      .filter((i) => i)
      .flat(1);
  if (selected === "Courses") rows = courses;

  return rows;
};
