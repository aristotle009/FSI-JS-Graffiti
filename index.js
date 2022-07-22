
// Select some elements...


let header = document.querySelector('#page-header')
header.style.textAlign = "right"
document.body.style.backgroundColor = "red";

let dogImages = document.querySelectorAll('.dog-image')

for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '100px'
}



