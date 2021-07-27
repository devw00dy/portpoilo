var num = 1;

function changePic(idx) {
	if (idx) {
		if (num == 5) num = 1;
		else
			num++;
	} else {
		if (num == 1) num = 5;
		else
			num--;
	}
	var imgTag = document.getElementById("main");
	imgTag.setAttribute("src.css", "../images/main_img0" + num + ".jpg");
}
