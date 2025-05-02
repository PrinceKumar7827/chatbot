let input = document.querySelector("input");
let value = input.value;
let chatWindow = document.getElementById("chat-window");
let button = document.querySelector("button");
let q1 = document.querySelector("#q1")
let q2 = document.querySelector("#q2")
let q3 = document.querySelector("#q3")
let fetchData = {}
fetch("data.json")
.then(response => response.json())
.then(data => {
  // console.log(data);
  fetchData = data
  // console.log(fetchData);
  // useData();
})
.catch(error => console.error("error loading json: ", error))


button.addEventListener(("click"), () => {
  clear()
  value = input.value.toLocaleLowerCase().trim();
  chatWindow.innerHTML += `<div class='message user'>${value}</div>`;
  // let input = document.querySelector("input").value.toLowerCase().trim();




  let response = fetchData[value] || ["Sorry, I didn't understand that🤔. Try asking about WhatsApp, Paytm, or Google Pay⚡."];

  response.forEach(line => {

    setTimeout(() => {
      chatWindow.innerHTML += `<div class='message bot'>${line}</div>`;
    },1000)

  });
})

q1.addEventListener(("click"), () => {
input.value = q1.innerText;
})
q2.addEventListener(("click"), () => {
input.value = q2.innerText;
})
q3.addEventListener(("click"), () => {
input.value = q3.innerText;
})


function clear() {
  value = "";
  chatWindow.innerHTML = "";
}

let ask = document.querySelector(".ask");
let chatbot = document.querySelector("#chatbot");

let toggler = true;

ask.addEventListener(("click"), () => {
    if(toggler) {
        chatbot.style.display = "block";
        // console.log("clicked");
        toggler = false
    }
    else {
        // console.log("clicked2");
        chatbot.style.display = "";
        toggler = true
    }
})