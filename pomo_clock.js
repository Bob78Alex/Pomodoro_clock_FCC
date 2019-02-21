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
	

	function timer(){

		$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2" ).hide();
		$("#timeType").html("Session Time: ");
		count-=1;
		if(count===0){

		buzzer.play();
		clearInterval(counter);
	}

		$("#num").html(count);

	}

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