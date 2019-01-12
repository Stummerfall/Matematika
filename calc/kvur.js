
function sum() 
{
	var a1 = parseFloat(document.getElementById('d1').value);
	var a2 = parseFloat(document.getElementById('d2').value);
	var a3 = parseFloat(document.getElementById('d3').value);
	d = (a2*a2) - (4 * (a1*a3));
	if (d>=0){
		
			res1 = (-a2-(Math.sqrt(d)))/(2*a1);
		 	res2 = (-a2+(Math.sqrt(d)))/(2*a1);		
			document.getElementById('a0').value="D = "+d+" X1 = "+res1.toFixed(3)+" X2 = "+res2.toFixed(3);
	}
	else
	
	{document.getElementById('a0').value="D = "+d+" Корней нет.";}
}

function glav(){
	window.open("../index.html","_self")
}
