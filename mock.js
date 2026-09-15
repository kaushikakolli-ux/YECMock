console.log("mock.js loaded successfully!");
 
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  if (heading) {
    heading.addEventListener("click", () => {
      heading.textContent = heading.textContent === "Hello World"
        ? "You clicked me!"
        : "Hello World";
    });
  }
});