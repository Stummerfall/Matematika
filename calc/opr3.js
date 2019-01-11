
function sum() 
{
	var a1 = parseFloat(document.getElementById('1').value);
	var a2 = parseFloat(document.getElementById('2').value);
	var a3 = parseFloat(document.getElementById('3').value);
	var a4 = parseFloat(document.getElementById('4').value);
	var a5 = parseFloat(document.getElementById('5').value);
	var a6 = parseFloat(document.getElementById('6').value);
	var a7 = parseFloat(document.getElementById('7').value);
	var a8 = parseFloat(document.getElementById('8').value);
	var a9 = parseFloat(document.getElementById('9').value);
	res=(a1*a5*a9)+(a2*a6*a7)+(a3*a4*a8)-(a3*a5*a7)-(a2*a4*a9)-(a1*a6*a8);
	document.getElementById('0').value=res;
}

function opr() 
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
	var a10 = parseFloat(document.getElementById('d10').value);
	var a11 = parseFloat(document.getElementById('d11').value);
	var a12 = parseFloat(document.getElementById('d12').value);
	var a13 = parseFloat(document.getElementById('d13').value);
	var a14 = parseFloat(document.getElementById('d14').value);
	var a15 = parseFloat(document.getElementById('d15').value);
	var a16 = parseFloat(document.getElementById('d16').value);
	res=(a1*((a6*a11*a16)+(a7*a12*a14)+(a8*a10*a15)-(a8*a11*a14)-(a6*a12*a15)-(a7*a10*a16)))-(a2*((a5*a11*a16)+(a7*a12*a13)+(a8*a9*a15)-(a8*a11*a13)-(a5*a12*a15)-(a7*a9*a16)))+(a3*((a5*a10*a16)+(a6*a12*a13)+(a8*a9*a14)-(a8*a10*a13)-(a5*a12*a14)-(a6*a9*a16)))-(a4*((a5*a10*a15)+(a6*a11*a13)+(a7*a9*a14)-(a7*a10*a13)-(a5*a11*a14)-(a6*a9*a15)));
	document.getElementById('d0').value=res;
}

function glav(){
	window.open("../index.html","_self")
}
