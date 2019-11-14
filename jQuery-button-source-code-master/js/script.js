$(document).ready(function(){
 // put your code here
  
 //1 
  // $("#panel").click(function () {
  //   $("#panel").hide();
  // });
//2
  // $(".theButton").click(function () {
  //   $(this).hide();
  // });
// 3
  // $(".container").click(function () {
  //   $(this).siblings().fadeTo('slow', 0.1);
  // });
//4
  // $(".superButton").click(function () {
  //   $(".container").fadeTo('slow', 1);
  // });
//5
$(".theButton").mouseover(function(){
	$(this).addClass("makeBlack");
   });
//6
  $(".theButton").mouseout(function () {
    $(this).removeClass("makeBlack");
  });

  
});