var cant = 0;
document.getElementById("cantidad").innerHTML = cant;

function up(){
  if(cant >= 0 ){
    cant ++;
  }
document.getElementById("cantidad").innerHTML = cant;
}

function down(){
  if(cant < 10 ){
    cant --;
  }
document.getElementById("cantidad").innerHTML = cant;
}