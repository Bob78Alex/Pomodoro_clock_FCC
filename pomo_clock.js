//Running jQuery
$('document').ready(function(){

var buzzer = $("#buzzer")[0];
var count = parseInt($("#num").html());
var breakTime = parseInt($("#breakNum").html());
/*buzzer.play();*/

console.log(count);
$("#reset").hide();

$("#start").click(function(){

	var counter = setInterval(timer, 1000);
	count *= 60;
	

	function timer(){

		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2" ).hide();
		$("#timeType").show();
		$("#timeType").html("Session Time: ");
		count-=1;
		if(count===0){

		buzzer.play();
		clearInterval(counter);

		var startBreak = setInterval(breakTimer, 1000);
		breakTime*= 60;
		$("#num").hide();

	}

if(count%60>=10){
	$("#num").html(Math.floor(count/60)+":"+count%60);
}
else{
	$("#num").html(Math.floor(count/60)+":"+"0"+count%60)
}

		/*$("#num").html(count);*/


		function breakTimer() {
			$("#timeType").html("Break time Baby: ");
			$("#breakNum").show();
			breakTime -=1;
			if(breakTime === 0){
				clearInterval(startBreak);
				$("#reset").show();
				buzzer.play();
				$("#timeType, #breakNum").hide();

			}
if(breakTime%60>=10){
	$("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
}
else{
	$("#reakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60)
}
			/*$("#breakNum").html(breakTime);*/
		}

	}



});

$("#reset").click(function(){
count=5;
breakTime=5;
$("#num").html(count);
$("#breakNum").html(breakTime);
$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
$("#reset, #timeType").hide();
});


$('#minus5Clock').click(function(){
if(count>5) 
{
	count -= 5;
	$("#num").html(count);
	console.log(count);

}
});


$('#add5Clock').click(function(){

	count += 5;
	$("#num").html(count);
	console.log(count);


});

$('#minus5Break').click(function(){
if(breakTime>5) 
{
	breakTime -= 5;
	$("#breakNum").html(breakTime);
	console.log(breakTime);

}
});

$('#add5Break').click(function(){

	breakTime += 5;
	$("#breakNum").html(breakTime);
	console.log(count);


});


});