
function sum() 
{
	var a1 = parseFloat(document.getElementById('d1').value);
	var a2 = parseFloat(document.getElementById('d2').value);
	var a3 = parseFloat(document.getElementById('d3').value);
	var a4 = parseFloat(document.getElementById('d4').value);
	var a5 = parseFloat(document.getElementById('d5').value);
	var a6 = parseFloat(document.getElementById('d6').value);
	var a7 = parseFloat(document.getElementById('d7').value);
	var a8 = parseFloat(document.getElementById('d8').value);
	var a9 = parseFloat(document.getElementById('d9').value);
	res1 = a7*((a2*a6)-(a3*a5));
	res2 = a8*((a3*a4)-(a1*a6));
	res3 = a9*((a1*a5)-(a2*a4));
	res4 = res1+res2+res3;
	document.getElementById('a0').value=res4;

}

function glav(){
	window.open("../index.html","_self")
}
