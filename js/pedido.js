function incrementValue(id)
{
    var value = parseInt(document.getElementById(id).value, 0);
    value = isNaN(value) ? 0 : value;
    value ++;

    if (value>10){
       return document.getElementById(id).value = 10;
    }
    else return document.getElementById(id).value = value;
}

function decrementValue(id){
var value = parseInt(document.getElementById(id).value, 0);
    value = isNaN(value) ? 0 : value;
    value --;

    if (value<0){
        return document.getElementById(id).value = 0;
     }
     else return document.getElementById(id).value = value;
}