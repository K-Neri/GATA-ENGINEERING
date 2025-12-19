$(document).ready(function()
{
	$('.readmore1').click(function()
	{
		$('.more-content1').fadeIn(1000);
		$('.readmore1').fadeOut(500);
	});

	$('.readmore2').click(function()
	{
		$('.more-content2').slideDown("slow");
		$('.readmore2').fadeOut(500);
	});

	$('.readmore3').click(function()
	{
		$('.more-content3').fadeIn(1000);
		$('.readmore3').fadeOut(500);
	});

	$('.readmore4').click(function()
	{
		$('.more-content4').fadeIn(1000);
		$('.readmore4').fadeOut(500);
	});
})