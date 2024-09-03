
const btn = document.getElementById("btn");
const para = document.getElementById("getPara");
const type0 = document.getElementById("type0");
const URL = "https://hindi-quotes.vercel.app/random";


const getQuote = async () => {
    console.log("loading Data...");
    const responce = await fetch(URL);
    console.log(responce);
    const data = await responce.json();
    type0.innerText = data.type;
    para.innerText = data.quote;


    type0.innerText = data.type;
    para.innerText = data.quote;

    if (data.type.toLowerCase() === "love") {
        type0.style.color = "red";
        para.style.color = "red";
        type0.innerText = "Love 💖"
    } if (data.type.toLowerCase() === "success") {
        type0.style.color = "green";
        para.style.color = "green";
        type0.innerText = "Success 🤟"
    } if (data.type.toLowerCase() === "positive") {
        type0.style.color = "green";
        para.style.color = "green";
        type0.innerText = "Positive 🙌"
    } if (data.type.toLowerCase() === "sad") {
        type0.style.color = "red";
        para.style.color = "red";
        type0.innerText = "Sad 💘"
    } if (data.type.toLowerCase() === "positive") {
        type0.style.color = "blue";
        para.style.color = "blue";
        type0.innerText = "Positive 🙌"
    } else if (data.type.toLowerCase() === "motivational") {
        type0.style.color = "yellow";
        para.style.color = "yellow";
        type0.innerText = "motivational"
    } else {
        type0.style.color = "white";
        para.style.color = "white";
    }
};


btn.addEventListener("click", getQuote);
