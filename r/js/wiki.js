let search_data={},searchBox=document.getElementsByClassName("search-w")[0],searchState=0,inputWrap=document.getElementsByClassName("search-input-w")[0],input=document.getElementById("t-s-input"),button=document.getElementById("t-s-button"),result=document.getElementById("t-search-result"),selected=null,list=[];function goto(e){console.log(e),window.location.href="/w/"+e}function updateList(){let e=input.value.toLowerCase();searchState=e.length>0?2:1;let t=search_data[e];if(t){t=(t=t.sort()).slice(0,10),list!==t&&(selected=null),list=t;let e='<div class="search-result">';for(let t=0;t<list.length;t++)e+=selected===t?'<div id="t-s-r-'+t+'" class="selected" onmouseenter="updateSelection('+t+');" onmouseleave="updateSelection(null);" onclick="goto(\''+list[t]+"')\">"+list[t]+"</div>":'<div id="t-s-r-'+t+'" onmouseenter="updateSelection('+t+');" onmouseleave="updateSelection(null);" onclick="goto(\''+list[t]+"')\">"+list[t]+"</div>";e+="</div>",result.classList.remove("hide"),result.innerHTML=e}else list=[],result.classList.add("hide"),result.innerHTML=""}function updateSelection(e){if(selected!==e){if(null!==selected){document.getElementById("t-s-r-"+selected).classList.remove("selected")}if(null!==e){document.getElementById("t-s-r-"+e).classList.add("selected")}selected=e}}function onKey(e,t,n,s){e.which!==t&&e.keyCode!==t&&e.key!==n||(e.preventDefault(),s())}function openSearchBox(){searchBox.classList.add("expand"),setTimeout(function(){inputWrap.classList.remove("hide"),input.value.length>0&&result.classList.remove("hide"),input.focus()},210),searchState=1}function closeSearchBox(){searchBox.classList.remove("expand"),input.blur(),inputWrap.classList.add("hide"),result.classList.add("hide"),searchState=0}!function(){let e,t,n,s,o=document.querySelector(".toc"),l=document.querySelector(".toc-marker path"),i=.05,c=0;function a(){e=(e=(e=[].slice.call(o.querySelectorAll("li"))).map(function(e){let t=e.querySelector("a"),n=document.getElementById(t.getAttribute("href").slice(1));return{listItem:e,anchor:t,target:n}})).filter(function(e){return!!e.target});let n,s=[];e.forEach(function(e,t){let o=e.anchor.offsetLeft-5,i=e.anchor.offsetTop,c=e.anchor.offsetHeight;0===t?(s.push("M",o,i,"L",o,i+c),e.pathStart=0):(n!==o&&s.push("L",n,i),s.push("L",o,i),l.setAttribute("d",s.join(" ")),e.pathStart=l.getTotalLength()||0,s.push("L",o,i+c)),n=o,l.setAttribute("d",s.join(" ")),e.pathEnd=l.getTotalLength()}),t=l.getTotalLength(),u()}function u(){let o=window.innerHeight,a=t,u=0,r=0;e.forEach(function(e){let t=e.target.getBoundingClientRect();t.bottom>o*i&&t.top<o*(1-c)?(a=Math.min(e.pathStart,a),u=Math.max(e.pathEnd,u),r+=1,e.listItem.classList.add("visible")):e.listItem.classList.remove("visible")}),r>0&&a<u?a===n&&u===s||(l.setAttribute("stroke-dashoffset","1"),l.setAttribute("stroke-dasharray","1, "+a+", "+(u-a)+", "+t),l.setAttribute("opacity",1)):l.setAttribute("opacity",0),n=a,s=u}window.addEventListener("resize",a,!1),window.addEventListener("scroll",u,!1),a()}(),function(){let e=new XMLHttpRequest;e.open("GET","/r/search.json"),e.send(),e.onload=function(){search_data=JSON.parse(e.response)},input.addEventListener("keydown",function(e){onKey(e,13,"Enter",function(){2===searchState&&goto(list[selected||0]||input.value)}),onKey(e,40,"ArrowDown",function(){let e=selected;null===e?e=0:e++,e>=list.length&&(e=null),updateSelection(e)}),onKey(e,38,"ArrowUp",function(){let e=selected;null===e?e=list.length-1:e--,e<0&&(e=null),updateSelection(e)}),onKey(e,27,"Escape",function(){input.blur()})}),input.addEventListener("input",function(){updateList()}),button.addEventListener("click",function(){0===searchState?openSearchBox():1===searchState?closeSearchBox():goto(list[selected||0]||input.value)})}(),document.addEventListener("keydown",function(e){0===searchState?onKey(e,191,"/",openSearchBox):document.activeElement!==input&&(onKey(e,191,"/",function(){input.focus()}),onKey(e,27,"Escape",closeSearchBox))});let themeButton=document.getElementById("t-t-button"),themeIcon=document.getElementById("t-t-icon"),darkThemeCss=document.getElementById("r-dark"),lightThemeCss=document.getElementById("r-light");function changeTheme(){let e=document.getElementsByTagName("html")[0];"dark"===e.classList[0]?(e.classList=["light"],darkThemeCss.disabled=!0,lightThemeCss.disabled=!1,themeIcon.classList.remove("fa-sun"),themeIcon.classList.remove("fa-lg"),themeIcon.classList.add("fa-moon"),setCookie("theme","light",365)):(e.classList=["dark"],darkThemeCss.disabled=!1,lightThemeCss.disabled=!0,themeIcon.classList.remove("fa-moon"),themeIcon.classList.add("fa-sun"),themeIcon.classList.add("fa-lg"),setCookie("theme","dark",365))}function setCookie(e,t,n){let s="";if(n){const e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),s="; expires="+e.toUTCString()}document.cookie=e+"="+(t||"")+s+"; path=/"}function getCookie(e){const t=e+"=",n=document.cookie.split(";");for(let e=0;e<n.length;e++){let s=n[e];for(;" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null}themeButton.addEventListener("click",changeTheme),function(){let e=getCookie("theme");null===e&&(e="dark"),document.getElementsByTagName("html")[0].classList[0]!==e&&changeTheme()}();