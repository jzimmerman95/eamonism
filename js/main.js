$(document).ready(function(){
    setInterval(function() {
    	changeImage()
  	},2000);
});

function changeImage() {
	document.getElementById('bird').src = 'images/colorbird.png';
}


var index;

// holds the titles of all the images
var titles = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title7', 'title8', 'title9'];

function startLightBox(event) {
	// Get the modal
	var modal = document.getElementById('myModal');
	index = parseInt(event.target.id);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(index);
	var modalImg = document.getElementById("img");
	var captionText = titles[index];
    modal.style.display = "block";
    modalImg.src = img.src;
    // modalImg.alt = this.alt;
    // captionText.innerHTML = this.alt;

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	    modal.style.display = "none";
	}

}























//Sets index to image clicked on, sets lightBoxImg to the image clicked on,
//sets the title of the image, and displays the lightBox
// function startLightBox(event) {
//   index = parseInt(event.target.id);
//   console.log("index" + index)
//   document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
//   document.getElementById("lightBoxTitle").innerHTML = titles[index];

//   var lbBg = document.getElementById("lightBoxBg");
//   var lb = document.getElementById("lightBox");
//   // var prev = document.getElementById("prevArrow");
//   // var next = document.getElementById("nextArrow");

//   lbBg.style.display = "block";
//   lb.style.display = "block";
//   // prev.style.display = "block";
//   // next.style.display = "block";
// }

// //When the user clicks on lightBoxBg, the lightBox is 'dismissed' (display = none)
// function dismiss() {
//   var lbBg = document.getElementById("lightBoxBg");
//   var lb = document.getElementById("lightBox");

//   lbBg.style.display = "none";
//   lb.style.display = "none";
// }

// //decreases index to display the next image in the gallery
// function goToPrev() {
//   if (index == 0) {
//     index = images.length-1;
//   } else {
//     index--;
//   }
//   document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
//   document.getElementById("lightBoxTitle").innerHTML = titles[index];
// }

// //increases index to display the next image in the gallery
// function goToNext() {
//   if (index == images.length-1) {
//     index = 0;
//   } else {
//     index++;
//   }
//   document.getElementById("lightBoxImg").style.backgroundImage = 'url(' + images[index] + ')';
//   document.getElementById("lightBoxTitle").innerHTML = titles[index];
// }



//Parses / stores data from the API call in titles and images, 
//creates the div that holds the image in the gallery and inserts it
//into "content" div in HTML
// function hndlr() {
//   for (var i = 0; i < images.length; i++) {
//     var imageDiv = "<div class='box' onclick='startLightBox(event)' ><div class='boxInner'><img id='" + i + "' src='" + images[i] + "' /></div></div>";

//     document.getElementById("wrap").innerHTML += imageDiv;
//   }
// }