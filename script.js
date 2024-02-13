const container = document.querySelector(".container");
const yes = document.getElementById("yes");
const No = document.getElementById("no");
const response = document.createElement("h3");

yes.addEventListener("click", () => {
  container.appendChild(response);
  response.textContent = "Best of luck";
});
No.addEventListener("click", () => {
  const respondno = document.createElement("div");

  container.appendChild(respondno);
  response.textContent =
    "no worries, I will be your Valentine, accept these flowers";
  respondno.appendChild(response);

  respondno.innerHTML = `
    
     
   <img src="https://cdn.euroflorist.com/Products/600x700/DE21VALMM04S_1.jpg" alt="">
  `;
});
