function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value ++;
    document.getElementById('number').value = value;
}

function decrementValue(){
var value = parseInt(document.getElementById('number').value, 0);
    value = isNaN(value) ? 0 : value;
    value --;
    document.getElementById('number').value = value;
}