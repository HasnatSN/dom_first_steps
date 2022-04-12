const container = document.querySelector("#container");

const buttons = document.querySelectorAll("button");

const p_red = document.createElement("p");
const h3_blue = document.createElement("h3");
const div_3 = document.createElement("div");
const h1 = document.createElement("h1");
const p_div = document.createElement("p");
const btn = document.querySelector("#btn");

p_red.textContent = "Hey I'm red!";
h3_blue.textContent = "I'm a blue h3";
h1.textContent = "I'm in a div";
p_div.textContent = "ME TOO";

p_red.style.color = "red";
h3_blue.style.color = "blue";
div_3.setAttribute("style", "background: pink; border: 1px solid black");

container.appendChild(p_red);
container.appendChild(h3_blue);
div_3.appendChild(h1);
div_3.appendChild(p_div);
container.appendChild(div_3);


function alertFunction() {
  alert("I did it.");
}

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

buttons.forEach((button) => {
    
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
