import { useEffect, useLayoutEffect, useState } from "react";

export default function BrowserDetect() {
  const [browser, setBrowser] = useState()
function detect() {
  // Get the user-agent string 
  let userAgentString =  
  navigator.userAgent; 

// Detect Chrome 
let chromeAgent =  
  userAgentString.indexOf("Chrome") > -1; 

// Detect Internet Explorer 
let IExplorerAgent =  
  userAgentString.indexOf("MSIE") > -1 ||  
  userAgentString.indexOf("rv:") > -1; 

// Detect Firefox 
let firefoxAgent =  
  userAgentString.indexOf("Firefox") > -1; 

// Detect Safari 
let safariAgent =  
  userAgentString.indexOf("Safari") > -1; 
    
// Discard Safari since it also matches Chrome 
if ((chromeAgent) && (safariAgent))  
  safariAgent = false; 

// Detect Opera 
let operaAgent =  
  userAgentString.indexOf("OP") > -1; 
    
// Discard Chrome since it also matches Opera      
if ((chromeAgent) && (operaAgent))  
  chromeAgent = false; 

  

chromeAgent && setBrowser("chrome")
safariAgent && setBrowser("safari")
firefoxAgent && setBrowser("firefox")
IExplorerAgent && setBrowser("IE")
operaAgent && setBrowser("opera")
}



useEffect(()=> {
  detect()
},[])

return browser;
}