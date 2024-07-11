let quotes (){

}
let num1 = Math.floor(Math.random() * 256);
let num2 = Math.floor(Math.random() * 256);
let num3 = Math.floor(Math.random() * 256);


window.addEventListener("load", () => {
  let quote = document.getElementById("quotes");
  let name = document.getElementById("person");
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerText = “${quotes[randomQuote].quote}”;
  name.innerText = ${quotes[randomQuote].name};
  document.body.style.backgroundColor = rgb(${num1}, ${num2}, ${num3});
});