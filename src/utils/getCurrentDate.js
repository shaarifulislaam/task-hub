export const showCurrentDate = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current day of the week (0-6)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current month (0-11)
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
//   const day = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];

  // Get the current year
  const year = currentDate.getFullYear();

  // Get the current date (1-31)
  const date = currentDate.getDate();


  return `${date}/${month}/${year}`;
};
