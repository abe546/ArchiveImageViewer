 chrome.browserAction.onClicked.addListener(
function(tab) { 
  
 
  document.body.style.backgroundColor = "gray";
 var button = document.createElement("input");
    button.type = "button";
    button.value = "im a button";
    button.onclick = func;
    document.body.appendChild(button);
	
	chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
 
}
);
 
 
 

	
	//var $input = $('<input type="button" value="new button" />');
    //$input.appendTo($("body"));
	
 
 
  