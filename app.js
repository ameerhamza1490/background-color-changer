let btn = document.querySelector("#changer");
btn.addEventListener("click", function () {
    let hexCode = "#" + Math.round(Math.random() * 1000000);
    document.body.style.backgroundColor = hexCode;
    console.log(hexCode)
})  