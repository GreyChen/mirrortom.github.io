(n=>{const t=n.$ui;let i=(n,t,i)=>{if(n>=0&&t>=5&&i>=1){let i=parseInt(n/t),r=n%t;return r>0?i+1:i}return 0},r=n=>{let t={};return t.PageIndex=n.pageIndex||1,t.PageSize=n.pageSize>4&&n.pageSize<51?n.pageSize:10,t.TotalData=n.totalData||0,t.TotalPage=i(t.TotalData,t.PageSize,t.PageIndex),t.TotalBtn=n.totalBtn>4&&n.totalBtn<11?n.totalBtn:5,t.pageClickE=n.pageClickE,t},u=n=>{let t=n.PageIndex-parseInt(n.TotalBtn/2)+(n.TotalBtn%2==0?1:0),i=n.PageIndex+parseInt(n.TotalBtn/2);t<1&&(t=1,i=i>n.TotalPage?n.TotalPage:n.TotalBtn);i>n.TotalPage&&(i=n.TotalPage,t=i-n.TotalBtn+1,t<1&&(t=1));n.StartIndex=t;n.EndIndex=i},f=(n,i)=>{t(n).find(".pagenum-prev,.pagenum-next,.pagenum-first,.pagenum-last,.pagenum-num").each(n=>{n.onclick=()=>{let r=parseInt(t(n).prop("pagenum"))||0;r<1||r>i.TotalPage||i.pageClickE(r)}}),t(n).find(".pagenum-ok")[0].onclick=()=>{let r=parseInt(t(n).find(".pagenum-input")[0].value||0);r<1||r>i.TotalPage||i.pageClickE(r)}},e=n=>{let o=document.getElementById(n.domId),i=r(n);o.innerHTML="";o.innerText="";let s=t("<span>").addClass("pagenum-btns")[0],h=t("<span>").addClass("pagenum-skip")[0];h.innerHTML=`共<b class="pagenum-total">${i.TotalPage}</b>页&nbsp;&nbsp;到第<input class="pagenum-input" />页<a class="pagenum-ok">确定</a>`;u(o,i);console.log(i);let e="";if(e+=`<a class="pagenum-prev" pagenum="${i.PageIndex-1}">&lt;</a>`,i.StartIndex>1){let n=i.PageIndex==1?"active":"num";e+=`<a class="pagenum-${n}" pagenum="1">1</a>`}i.StartIndex>2&&(e+='<span class="pagenum-break">...<\/span>');for(let n=i.StartIndex;n<=i.EndIndex;n++){let t=n,r=t==i.PageIndex?"active":"num";e+=`<a class="pagenum-${r}" pagenum="${t}">${t}</a>`}if(i.EndIndex<i.TotalPage-1&&(e+='<span class="pagenum-break">...<\/span>'),i.EndIndex<i.TotalPage){let n=i.PageIndex==i.TotalPage?"active":"num";e+=`<a class="pagenum-${n}" pagenum="${i.TotalPage}">${i.TotalPage}</a>`}e+=`<a class="pagenum-next" pagenum="${i.PageIndex+1}">&gt;</a>`;s.innerHTML=e;console.log(s);o.appendChild(s);o.appendChild(h);f(o,i)};n.pagenum=e})(window)