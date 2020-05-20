$("#window").css("overflow", "hidden");
$("#button").show();
$("#button2").show();
var wi = document.getElementById('window').offsetWidth;

document.getElementById("window").style.display = "block";
document.getElementById("window").style.overflow = "hidden";
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
