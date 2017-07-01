document.body.style.backgroundColor = "gray";
var count =0; 
var imagesArray = document.getElementsByClassName("fileThumb"); 
var first; 
var bumper=0; 
var t;

	
	var $input = $('<p><input type="button" value="Start" id="b" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp  <input type="button" value="forward - press \'w\'" id="w" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp <input type="button" value="backward - press \'s\'" id="s" > </p>');
     $input.prependTo($("body"));
	 
	 
	 $("#w").hide(); 
		$("#s").hide(); 
		
		 $("#b").after("<div id=\"message\" ></div>"); 
	 $("#message").after("<div id=\"imageView\" ></div>"); 
	 
	 var image = document.getElementById("message"); 
	 
	 image.innerHTML +='<img src="https://web.njit.edu/~ic56/archive/w.png" class="next" id="w" >';
	 
	 
	 console.log("Before pre load."); 
preLoad(); 
console.log("After pre load."); 
$(".myImage").hide(); 
	 
	 $("#w").click(function()
	 {
		count++;
	 if(count>=t)
	 {count=0;
		 $("#b").prop("value","open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide();
		return;
	 }
	 bumper++; 
	    $("#theImage"+(count-1)).hide(); 
	document.getElementById("theImage"+(count-1)).volume=0.0; 
	 func(); 
	 return; 
		 
	 }
	 );
	 
	 $("#s").click(function()
	 {
		$("#theImage"+(count)).hide(); 
	document.getElementById("theImage"+(count)).volume=0.0; 
	 goBack();
     func();  
	 return; 
	 }
 
	 );
	 
	 $("#b").click(function(){ 
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		  
		localStorage.setItem("in",1); 
		$("#b").prop("value","esc"); 
		$("#w").show();
		$("#s").show(); 
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide(); 
		
		
		
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
		$("#b").prop("value","esc"); 
			$("#w").show();
		$("#s").show(); 
		func();
	} });
	
	
	
	
	 
function func()
{ 
console.log("in Func"); 
	var id = goForward(); 
 
	var view = document.getElementById("theImage"+count); 
	console.log("theImage"+count); 
 
	window.location.hash = ("#"+id);
 
	
	
 
 
 	 
		
		
	 
		view.style.display="block";
		view.volume = 0.2; 
		view.autoplay = true;
 
	
	
	
 
	
	
 
	
}

$(document).keydown(function(e){
	
  console.log(e.keyCode); 
 
 //w== 87
 //s== 83
 if(localStorage.getItem("in")==1)
 {
 if(e.keyCode==87)
 {
	 count++;
	 if(count>=t)
	 {count=0;
		 $("#b").prop("value","open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide();
		return;
	 }
	 bumper++; 
	    $("#theImage"+(count-1)).hide(); 
	document.getElementById("theImage"+(count-1)).volume=0.0; 
	 func(); 
	 return;
 }
 
 if(e.keyCode==83)
 {
	    $("#theImage"+(count)).hide(); 
	document.getElementById("theImage"+(count)).volume=0.0; 
	 goBack();
     func(); 
	  return; 
	 }
	 
	
	 
 }
 
 if(e.keyCode==27)
 {
	 console.log("Here in escape."); 
	 localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","open"); 
		$(".myImage").hide();
		
		$("#w").hide(); 
		$("#s").hide(); 
		
		return;
	 
 }
 
  
 
});

function goBack()
{
	$("#theImage"+count).hide(); 
	document.getElementById("theImage"+count).volume=0.0; 
	if(count!=0)
	 {
		 count--;
		 bumper--; 
		 
		 var elements = document.getElementsByTagName("article");
 
	var className = elements[bumper].className;
 
	var issue = 0; 
 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper--;
		className = elements[bumper].className;
 
		issue=1; 
		
	}
	}
}

function goForward()//just returns id and increments bumper
{
	var elements = document.getElementsByTagName("article");
 
	 
	var className = elements[bumper].className;
 
	
	var issue = 0; 
 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper++;
		className = elements[bumper].className;
 
		
		issue=1; 
		
	}
 
    var id = elements[bumper].id;
	
	return id; 
	
	
}



function preLoad()
{
	
	var thread = document.getElementsByClassName("post_file_filename")
	t=thread.length;
	var view = document.getElementById("imageView"); 
	var post="";
	for(i=0;i<thread.length;i++)
	{
		post=""; 
	
     if(i>1)
	 {
		 $("#theImage"+(i-1)).hide;
		 document.getElementById("theImage"+(i-1)).volume=0.0; 
		 console.log("Append."); 
	 }
 
 
	
	  
 
	 
  
		var string = thread[i].toString();
 
		
		if(string.substring(0,5) != "https")
        {
			string = "https"+string.substring(4,string.length);
		}
		var end = string.substring(string.length-4,string.length);
 
 	 
		
		
	if(end!="webm")  
	{
 
	post += "<img id=\"theImage"+i+"\" class=\"myImage\" src=\""+string+"\" >";
	//view.style.display="hidden"; 
	}
	else
	{ 
		post += "<video id=\"theImage"+i+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">";
		
		//document.getElementById("theImage"+i).volume = 0.0; 
		//view.style.display="hidden";
	 
	}
	
	$("#imageView").after(post);  
	
	 console.log(i); 
	 console.log("Post : "+post); 
}

 $("#theImage"+(thread.length-1)).hide;
		 document.getElementById("theImage"+(thread.length-1)).volume=0.0; 

 

	
}






