var images = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png'
];

var img = document.getElementById("img");

function imgShow(num) {
	var num = Math.floor(Math.random() * 6);
	var num = Math.floor(Math.random() * images.length);
	img.style.backgroundRepeat = "no-repeat";
}
imgShow();
