let field = document.getElementById('inputField');
console.dir(document);
function append(text){
    field.value += text;
}

function Clear(){
    field.value = '';
}

function equals(){
    try{
        field.value = eval(field.value)
    }
    catch{
        field.value = 'Error'
    }

}