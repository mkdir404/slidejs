$(document).ready(function(){

	var sideImg  = $('#slide > img'),
		countImg = sideImg.size(),
		count = 1;

	sideImg.not(':first').hide();
		
	loop = setInterval(function (){
				count+=1;
	 			count = (count > countImg) ? 1 : count;
	 			$('#slide > img').fadeOut(300);
	 			$('#slide > img#'+count).fadeIn(300);
	 			count+=1;
	 		},3000)

	$('#next').click(function(){
		
		count+=1;
		count = (count > countImg) ? 1 : count;
		$('#slide > img').fadeOut('slow');
		$('#slide > img#'+count).fadeIn('slow');
		clearInterval(loop);
		return false;
	});

	$('#prev').click(function(){
		
		count-=1;
		count = (count < 1 ) ? countImg : count;
		$('#slide > img').fadeOut('slow');
		$('#slide > img#'+count).fadeIn('slow');
		clearInterval(loop);
		return false;
		
	});

});