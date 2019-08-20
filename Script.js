	$(document).ready(function(){
		$("#flip").click(function(){
 			//$("#panel").slideDown("slow");
 			$("#panel").slideDown("slow");
		});


			
		$("#flip2").click(function(){
 			//$("#panel").slideDown("slow");
 			$("#panel").slideUp("slow");
		});

		$("#flip3").click(function(){
 			//$("#panel").slideDown("slow");
 			$("#panel").slideToggle("slow");
		});
	


	});




$(document).ready(function(){
  $("#b1").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });

    $("#b2").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });

});




$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>Appended text</b>.");
  });

  $("#btn2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });


	 $("#btn3").click(function(){
    $("b").remove();
  });

  $("#btn4").click(function(){
    $("li").remove();
  });

});


$( function() {
    $( "#accordion" ).accordion();
  });


