const getColor = () =>{
    //hex code
    const randomNumber=Math.floor(Math.random()*16777215);
    //console.log(randomNumber);
    //convert into hex code
    const randomCode="#"+randomNumber.toString(16);
    //console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;

    //now we have to changing color code
    document.getElementById("color-code").innerText=randomCode;

    //ab jo color apko pasand h usko copy krna h aur wo direct clipboard me aa jaye to 
    navigator.clipboard.writeText(randomCode);
}
//event call
document.getElementById("btn").addEventListener("click",getColor);

// intial call
getColor();