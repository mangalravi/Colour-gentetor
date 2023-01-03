const getcolor = () => {
    //color code = hex code

    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    // console.log(randomNumber);
    // console.log(randomCode);
    document.getElementById("color").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener("click",getcolor);
getcolor();
