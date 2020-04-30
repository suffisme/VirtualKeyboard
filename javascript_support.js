function display(val)
{
  var substring = document.getElementById("textview").value
  document.getElementById('textview').value=substring.substr(0,substring.length - 1)+val+'|'
}

function Del() 
{ 
    var value = document.getElementById("textview").value; 
    value = value.substr(0, value.length - 2)
    document.getElementById("textview").value = value + '|'; 
}

function clr()
{
 document.getElementById("textview").value='' 
}

function calc()
{
	let y=document.getElementById("textview").value
	let x=eval(y.substr(0,y.length-1))
	document.getElementById("textview").value=x
}
function display1(vali)
{
  if (vali=='del')
  {
    document.getElementById("output_screen").value=''
  }
	else
    {var output = document.getElementById("textview").value
    document.getElementById("output_screen").value=output.substr(0,output.length - 1)
  }
}

// function display(val)
// {
//   document.getElementById("textview").value+=val
// }

// function display1(vali)
// {
// 	var vvv
//   vvv=document.getElementById("textview").value+=vali
//   document.getElementById("p1").innerHTML=vvv
// }

// function Del() 
// { 
//     var value = document.getElementById("textview").value; 
//     document.getElementById("textview").value = value.substr(0, value.length - 1); 
// }

// function clr()
// {
//  document.getElementById("textview").value='' 
// }

// function calc()
// {
// 	let y=document.getElementById("textview").value
// 	let x=eval(y)
// 	document.getElementById("textview").value=x
// }
