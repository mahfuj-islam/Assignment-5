function getInputValueById(id) {
    const inputNumber = document.getElementById(id).value
    const input = parseFloat(inputNumber)
    return input;
}


function getInnerTextById(id){
    const innertextNumber = document.getElementById(id).innerText
    const innertext= parseFloat(innertextNumber)
    return innertext
}