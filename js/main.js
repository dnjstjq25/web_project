function bgc(n){

	if(n==1)
	{
		document.body.style.backgroundImage="url(./images/body_background_change1.jpg)";
		var a = document.getElementsByClassName('content_sign');
		for (var i = 0; i<a.length; i++) {
			a[i].style.color="#000000";
			a[i].style.borderLeft="10px double black";
			a[i].style.borderRight="10px double black";
		}

		for (var i = 1; i < 7; i++) {
			document.getElementById('cf_'+i).style.color="#000000";
		}
	}
	else if(n==2)
	{
		document.body.style.backgroundImage="url(./images/body_background_change2.jpg)";
		var a = document.getElementsByClassName('content_sign');
		for (var i = 0; i<a.length; i++) {
			a[i].style.color="#fff";
			a[i].style.borderLeft="10px double white";
			a[i].style.borderRight="10px double white";
		}

		for (var i = 1; i < 7; i++) {
			document.getElementById('cf_'+i).style.color="#fff";
		}
	}
	else if(n==3)
	{
		document.body.style.backgroundImage="url(./images/body_background_change3.jpg)";
		var a = document.getElementsByClassName('content_sign');
		for (var i = 0; i<a.length; i++) {
			a[i].style.color="#fff";
			a[i].style.borderLeft="10px double white";
			a[i].style.borderRight="10px double white";
		}

		for (var i = 1; i < 7; i++) {
			document.getElementById('cf_'+i).style.color="#fff";
		}
	}
}

