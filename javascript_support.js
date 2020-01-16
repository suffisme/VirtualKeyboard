function display(val)
{
  document.getElementById("textview").value+=val
}

function display1(vali)
{
	var vvv
  vvv=document.getElementById("textview").value+=vali
  document.getElementById("p1").innerHTML=vvv
}

function Del() 
{ 
    var value = document.getElementById("textview").value; 
    document.getElementById("textview").value = value.substr(0, value.length - 1); 
}

function clr()
{
 document.getElementById("textview").value='' 
}

function calc()
{
	let y=document.getElementById("textview").value
	let x=eval(y)
	document.getElementById("textview").value=x
}
