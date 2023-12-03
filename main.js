function run(){
    let htmlCode =document.querySelector(".codeeditor #html-area").value;
    let cssCode ="<style>"+document.querySelector(".codeeditor #css-area").value+"</style>";
    let scriptCode =document.querySelector(".codeeditor #script-area").value;


    let output=document.querySelector(".outputeditor #output-frame");

    output.contentDocument.body.innerHTML=htmlCode+cssCode;

    output.contentWindow.eval(scriptCode);
}

document.querySelector(".codeeditor #html-area").addEventListener("keyup", run);
document.querySelector(".codeeditor #css-area").addEventListener("keyup", run);
document.querySelector(".codeeditor #script-area").addEventListener("keyup", run);