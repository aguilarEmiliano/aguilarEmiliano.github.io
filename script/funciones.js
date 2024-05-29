function cargaPractica(htmlDocument) {
	document.getElementById("content").innerHTML = '<object width=\"100%\" height=\"100%\" type="text/html" data="' + htmlDocument + '" ></object>';
}

window.addEventListener('scroll', function() {
	var scrollPosition = window.pageYOffset;
  
	if (scrollPosition > 300) {
	  document.querySelector('.back-to-top').style.display = 'block';
	} else {
	  document.querySelector('.back-to-top').style.display = 'none';
	}
  });
  
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
	e.preventDefault();
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
  });