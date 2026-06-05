inputSlider = document.getElementById("inputslide");
slideValue = document.getElementById("slidevalue");
passBox = document.getElementById("passBox");
getBtn = document.getElementById("genBtn");
uppercase = document.getElementById("uppercase");
lowercase = document.getElementById("lowercase");

slideValue.textContent = inputSlider.value;

inputSlider.oninput = () => {
    slideValue.textContent = inputSlider.value;
}

getBtn.addEventListener("click", function(){
    passBox.value = generatePassword();
})

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword(){
    
    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperCase : "";
    allChars += lowercase.checked ? lowerCase : "";

    if (allChars.length == 0 || allChars == ""){
        return genPassword;
    }

    i = 1;
    while( i <= inputSlider.value){
    
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}
