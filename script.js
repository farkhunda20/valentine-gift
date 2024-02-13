const container = document.querySelector(".container");
const yes = document.getElementById("yes");
const No = document.getElementById("no");
const response = document.createElement("h3");

yes.addEventListener("click", () => {
  container.appendChild(response);
  response.textContent = "Best of luck";
});

No.addEventListener("click", () => {
  const image = document.createElement("img");
  image.src = "https://cdn.euroflorist.com/Products/600x700/DE21VALMM04S_1.jpg";
  container.appendChild(response);
  container.appendChild(image);
});
