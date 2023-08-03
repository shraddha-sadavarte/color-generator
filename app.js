const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#"+randomNumber.toString(16) //16 to convert it into hexadecimal number and to string converts into string
    
    document.body.style.backgroundColor = (randomColor); //to change the body bg color when click on button
    document.getElementById("color-code").innerText = (randomColor);

    navigator.clipboard.writeText(randomColor); //to copy the code to clipboard
}

document.getElementById("btn").addEventListener(
    "click", getColor
)

//init call 
getColor();