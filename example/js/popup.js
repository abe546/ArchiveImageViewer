document.body.style.backgroundColor = "gray";
var count =0; 
var imagesArray = document.getElementsByClassName("fileThumb"); 
var first; 
	
	var $input = $('<input type="button" value="Start" id="b" />');
     $input.prependTo($("body"));
	 
	 $("#b").click(function(){ 
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		  
		localStorage.setItem("in",1); 
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","open"); 
		$(".myImage").hide(); 
		
		
		
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
		func();
	} });
	 $("#b").after("<div id=\"message\" ></div>"); 
	 $("#message").after("<div id=\"imageView\" ></div>"); 
	 
function func()
{//NOT : Find way to get first image to be before the second one, instead of at bottom of page.
 
	console.log("Count : "+count); 
	
	
	
	var elements = document.getElementsByTagName("article");
	
	console.log("Elements length : "+elements.length); 
	
    var id = elements[count].id;
	
	if(count==0)
	{
		first=elements[count+1].id; 
	}
	
	var view = document.getElementById(id); 
	
	 
	
 
 
	
	window.location.hash = ("#"+id);
	
	

	
	console.log("In func."); 
	
	$("#b").prop("value","close"); 
	
	var write = document.getElementById("message"); 
	
	 
	write.innerHTML = ""; 
	write.innerHTML +="<b>It works.!</b>";
	/*Magic of the DOM*/
	
	//4chan var thread = document.getElementsByClassName("fileThumb"); 
	//Archive
	
	var thread = document.getElementsByClassName("post_file_filename")
 
        console.log("\n childNodes : "+thread[count]); 
	 
        /*for(i=0; i<thread.length;i++)
		{
			console.log("\n "+i+""+thread[i]);
		}*/
	 
	
	
	/**/
	
	
 	 
		$(".myImage").hide(); 
	  
	if(count==0)
	{
		var $zero= $("<center><img id=\"theImage"+count+"\" class=\"myImage\" src=\""+thread[count]+"\" ></center>");
		$("#"+first).prepend($zero); 
		
	}
	else
	{
	view.innerHTML+="<img id=\"theImage"+count+"\" class=\"myImage\" src=\""+thread[count]+"\" >";
	}
	

	
	
 
	
}

$(document).keydown(function(e){
	
 console.log(e.keyCode); 
 
 //w== 87
 //s== 83
 
 if(e.keyCode==87)
 {
	 count++;
	 
	 func(); 
	 return;
 }
 
 if(e.keyCode==83)
 {
	 if(count!=0)
	 {
		 count--;
		 func(); 
	 }
	 
	 return; 
	 
 }
});









