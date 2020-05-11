$("#window").css("overflow", "hidden");
$("#button").show();
$("#button2").show();

$("#dot1").show();
$("#dot2").show();
$("#dot3").show();


document.getElementById("dot3").style.backgroundColor = "lightblue";
document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
document.getElementById("dot1").style.backgroundColor = "DodgerBlue";

var plats = 0;

$("#button2").click(function(){

var slider = $("#imgs");

if (plats==0) {
  slider.animate({right:"+=804"},1000)
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  plats++;


}else if (plats==1) {
  slider.animate({right:"+=804"},1000)
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "lightblue";
  plats++;

}else if (plats==2) {
  slider.animate({right:"-=1608"},1000)
  document.getElementById("dot3").style.backgroundColor = "lightblue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  plats=0;

}
console.log(plats);
//används för att se vilken position/plats jag befinner mig i slidern, för att underlätta arbetet
});
$("#button").click(function(){

var slider = $("#imgs");
if (plats==0) {
  slider.animate({right:"+=1608"},1000)
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "lightblue";

  plats=2;


}else if (plats==1) {
  slider.animate({right:"-=804"},1000)
  document.getElementById("dot3").style.backgroundColor = "lightblue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";

  plats--;


}else if (plats==2) {
  slider.animate({right:"-=804"},1000)
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";

  plats--;

}
console.log(plats);
});
$("#dot3").click(function(){
  var slider = $("#imgs");
if(plats==0){
    slider.animate({right:"0"},1000)
  document.getElementById("dot3").style.backgroundColor = "lightblue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  plats=0;

}else if(plats==1){
  slider.animate({right:"-=804"},1000)
  document.getElementById("dot3").style.backgroundColor = "lightblue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  plats=0;
}else if(plats==2)
slider.animate({right:"-=1608"},1000)
document.getElementById("dot3").style.backgroundColor = "lightblue";
document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
plats=0;

});
$("#dot2").click(function(){
  var slider = $("#imgs");
if(plats==0){
    slider.animate({right:"+=804"},1000)
  document.getElementById("dot2").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  plats=1;

}else if(plats==1){
  slider.animate({right:"0"},1000)
  document.getElementById("dot2").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
  plats=1;
}else if(plats==2)
slider.animate({right:"-=804"},1000)
document.getElementById("dot2").style.backgroundColor = "lightblue";
document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
document.getElementById("dot1").style.backgroundColor = "DodgerBlue";
plats=1;

});
$("#dot1").click(function(){
  var slider = $("#imgs");
if(plats==0){
    slider.animate({right:"+=1608"},1000)
  document.getElementById("dot1").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  plats=2;

}else if(plats==1){
  slider.animate({right:"+=804"},1000)
  document.getElementById("dot1").style.backgroundColor = "lightblue";
  document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
  document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
  plats=2;
}else if(plats==2)
slider.animate({right:"0"},1000)
document.getElementById("dot1").style.backgroundColor = "lightblue";
document.getElementById("dot3").style.backgroundColor = "DodgerBlue";
document.getElementById("dot2").style.backgroundColor = "DodgerBlue";
plats=2;

});
