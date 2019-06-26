var p1=document.querySelector("#p1");
var p2=document.getElementById("p2");
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var p1score=0;
var p2score=0;
var p;
p1.addEventListener("click",function(){

	p1score++;
	p1display.textContent=p1score;
	console.log("P1"+ " " + p1score);
	if(p1score>5)
	{
	alert("P1 wins");
	console.log("P1 wins");
	resdisplay("p1");
	}
	
});

p2.addEventListener("click",function(){
	
	p2score++;
	p2display.textContent=p2score;
	console.log("P2" + " " + p2score);
	if(p2score>5)
	{
	alert("P2 wins");
	console.log("P2 wins");
	}
	resdisplay("p2");
});

function resdisplay(p)
{
	if (p=="p1")
	{
		res.textContent="P1";
	}
	else
	{
		res.textContent="P2";
	}
}

reset.addEventListener("click",function(){
	alert("Scores Reset");
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	resdisplay.textContent="none";
	console.log(p1score,p2score);
})