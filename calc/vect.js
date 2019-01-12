
function sum() 
{
	var a1 = parseFloat(document.getElementById('d1').value);
	var a2 = parseFloat(document.getElementById('d2').value);
	var a3 = parseFloat(document.getElementById('d3').value);
	var a4 = parseFloat(document.getElementById('d4').value);
	var a5 = parseFloat(document.getElementById('d5').value);
	var a6 = parseFloat(document.getElementById('d6').value);
	res1 = (a2*a6)-(a3*a5);
	res2 = (a3*a4)-(a1*a6);
	res3 = (a1*a5)-(a2*a4);
	document.getElementById('a1').value=res1;
	document.getElementById('a2').value=res2;
	document.getElementById('a3').value=res3;
}

function glav(){
	window.open("../index.html","_self")
}
