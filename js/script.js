window.onload = function() {

const form = document.querySelector("form");

form.onsubmit = function(e) {
  e.preventDefault();


  let over18 = document.getElementById("over_18");
  let under18 = document.getElementById("under_18");
  over18.setAttribute("class", "hidden");
  under18.setAttribute("class", "hidden");

  const age = parseInt(document.querySelector("input#age").value);

  if (age >= 18)


}
  
}