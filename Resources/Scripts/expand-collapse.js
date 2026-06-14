$(document).ready(function() {
		var ls = localStorage.getItem('collapsed');
		if (ls == "yes"){
			$(".sidenav-wrapper").hide();
			$(".collapse").addClass("expand");
			} 
		if ($(".expand").length){
			localStorage.setItem('collapsed', "yes");
		} else {
			localStorage.setItem('collapsed', "no");
		}
	$(".collapse").click(function() {
		$(".sidenav-wrapper").toggle(350);
		$(this).toggleClass("expand");
		var val = $(this).hasClass('expand') ? 'yes' : 'no';	
		localStorage.setItem('collapsed', val);
	});
});