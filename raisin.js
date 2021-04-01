const raisinAlarm = function(cookie) {
  // Put your solution here
  let result = "All good!";

  for (let snack of cookie) {

    if (snack === "🍇") {
      return "Raisin alert!";
    }
  }
  return result;
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
