	
function NavigationBar()   {
	displayPic("nobita", "nobita.html", "nobita-stand.jpg", "nobita-sit.jpg");
	displayPic("doremon", "doremon.html", "doremon-stand.jpg", "doremon-sit.jpg");
	displayPic("xeko", "xeko.html", "xeko-stand.jpg", "xeko-sit.jpg");
	displayPic("chaien", "chaien.html", "chaien-stand.jpg", "chaien-sit.jpg");
}

function changeImage(ID, firstImage, secondImage)   {
	var img1 = document.getElementById(ID)
	img1.src = firstImage
	img1.width = "150"
	img1.height = "200"
	img1.id = ID
	img1.onmouseover = function () {img1.src = secondImage}
	img1.onmouseout = function()  {img1.src = firstImage}
}

function displayPic(ID, link, firstImg, secondImg)   {
	document.write("<a href = " + link + ">")
	document.write("<img id = " + ID + " src = " + firstImg + ">")
	document.write("</a>")	
	changeImage(ID, firstImg, secondImg)
}
	



   