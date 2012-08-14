/*
	Minimize left menu by Kenny Yew - 31/05/2012
*/
function changeMenuSize(){
	//get device platform
	var platform = navigator.platform;
	//alert(platform);
	if(platform.indexOf( "iPhone" ) > -1 || platform == 'Win323'){
	}else{
		var mydata = $("#chg_menu").val();
		var left = '';
		var right = '';
		
		if(mydata == '' || mydata == 'big'){
			left = '15%';
			right = '75%';
			$("#chg_menu").val('small');
		}else{
			left = '34%';
			right = '56%';
			$("#chg_menu").val('big');
		}
		
		$('.content-secondary').css({ "width": left });;
		$('.content-primary').css({"width": right});
		$('#content').css('background-position', left+' '+right);
	}	
}