module.exports = function warmup(temperature) {
  // your implementation here

  if (isNaN(temperature)) {
    return null;
  }
  let fahrenheit = temperature * 9 / 5 + 32;

  return fahrenheit;
};
