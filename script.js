const container = document.querySelector(".container");
const yes = document.getElementById("yes");
const No = document.getElementById("no");
const response = document.createElement("h3");
const image = document.createElement("img");

yes.addEventListener("click", () => {
  container.appendChild(response);
  response.textContent = "Best of luck";
  image.src = "";
});

No.addEventListener("click", () => {
  image.src = "https://cdn.euroflorist.com/Products/600x700/DE21VALMM04S_1.jpg";
  response.innerHTML =
    "no worries, I will be your valentine, accept these flowers";
  container.appendChild(response);
  container.appendChild(image);
});
