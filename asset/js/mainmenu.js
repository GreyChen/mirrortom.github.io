function mainmenuonoff(n=0){let u=window.screen.width>768&&window.innerWidth>768;if(!u){let i="d-none",t=document.querySelector("#mainmenubox"),f=t.classList.contains(i),r=window.localStorage.getItem("theme"),e=r==2?"#202020":"#fcfcfc",o=r==2?"#b0b0b0":"#202020";f?n!==2&&(t.style.color=o,t.style.backgroundColor=e,t.classList.remove(i)):n!==1&&t.classList.add(i)}}function changetheme(n){let t="#fff",i="#333";n==2&&(t="#303030",i="#b0b0b0");document.documentElement.style.setProperty("--font-color",i);document.body.style.backgroundColor=t;window.localStorage.setItem("theme",n);let r=document.createEvent("HTMLEvents");r.initEvent("changethemehandler",!1,!1);window.dispatchEvent(r);mainmenuonoff(2)}function changefontsize(n){document.documentElement.style.setProperty("--font-size",n+"px");window.localStorage.setItem("fontsize",n);mainmenuonoff(2)}(()=>{let n=window.localStorage.getItem("theme"),t=window.localStorage.getItem("fontsize");n>0&&changetheme(n);t>0&&changefontsize(t)})()