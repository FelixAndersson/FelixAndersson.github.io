$("#window").css("overflow", "hidden");
$("#button").show();
$("#button2").show();


document.getElementById("window").style.display = "block";
document.getElementById("window").style.overflow = "hidden";

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


var kor;
kor = setInterval(auto, 7000);
function auto(){
  var slider = $("#imgs");

  if (plats==0) {
    var windowsize = document.getElementById("window").offsetWidth;
    slider.animate({right:windowsize},2000);

    plats++;


  }else if (plats==1) {
    var windowsize = document.getElementById("window").offsetWidth;
    slider.animate({right:windowsize+windowsize},2000);

    plats++;

  }else if (plats==2) {
    var windowsize = document.getElementById("window").offsetWidth;
    slider.animate({right:windowsize-windowsize},2000);

    plats=0;

  }
  console.log(plats);
}
var plats = 0;






var hand = [];
$(".lefthands").click(function(){
  if (!hand.includes(this.id)) {
    document.getElementById(this.id).style.backgroundColor = "yellow";
    hand.push(this.id);
  }
  else  {
    document.getElementById(this.id).style.backgroundColor = "white";
  var index = hand.indexOf(this.id);
  if (index !== -1) hand.splice(index, 1);
  }
  localStorage.setItem("p", JSON.stringify(lefthandses));
});
var storedNames = JSON.parse(localStorage.getItem("p"));
