let input = document.getElementById("add");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let el = document.getElementsByTagName("li");

btn.addEventListener("click", () => {
  var txt = input.value;
  if (txt === "") {
    alert("you must type something");
  } else {
    var li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("done");
  }
});
