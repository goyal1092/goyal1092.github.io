(function(){
	$('.body-circle .fa-stack').each(function(){
		 var obj = $(this);
		 
		 obj.hide().fadeIn('slow');
		 var h4 = obj.siblings("h4");
		 var text = obj.siblings("p");
		 h4.hide()
		 text.hide()
		 var width = obj.parent().width()/2 - $(this).width()/2;
     slideLeft(obj, width);
     h4.slideDown(1000);
		 text.slideDown(1000);
		});
	function slideLeft($this, width){
		$this.animate({
			left: width +'px',opacity: 1
		}, 2000);
	}
	$('#boxset').randomFadeIn(500);
})();