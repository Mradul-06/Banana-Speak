var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

// outputdiv.innertext ="mradul"


function clickHandler()
{
    console.log(txtinput.value)
    outputdiv.innerText= txtinput.value;
};


btntranslate.addEventListener("click", clickHandler)