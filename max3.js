function dateCalculation(year = "2022", month = "12", day = "12", add = "1") {
  year = Number(year);
  month = Number(month) - 1;
  day = Number(day);
  add = Number(add);

  let userDate = new Date(year, month, day);
  userDate.setDate(userDate.getDate() + add);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return userDate.toLocaleString("en-us", dateOptions);
}


const userDateChoice = dateCalculation(
  prompt("Enter year", "2022"),
  prompt("Enter month", "12"),
  prompt("Enter day", "12"),
  prompt("Enter number of days you want to add to your date", "1")
);
alert(`It will be: ${userDateChoice}`);