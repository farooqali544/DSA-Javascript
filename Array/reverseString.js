function reverse(str) {
  if (!str || typeof str !== "string") return new Error("Invalid Input");

  let backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

reverse('hi there');
