!function(){let n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n/* 你好,我是一名前端新人\n接下来我要加样式了\n我要加的样式是 */\n#div1{ \n    width:100px;\n    height:100px;\n}\n/* 接下来要变太极图啦\n先把div变成一个圆形\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/* 太极图是阴阳形成的，\n一黑一白\n */\n    #div1{\n        background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n    }\n\n    /* 加两个神秘的小球 */\n    #div1::before{\n        width:50px;\n        height:50px;\n        top:0;\n        left:50%;\n        transform:translateX(-50%);\n        background:#fff;\n        border-radius:50%;\n        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n    }\n\n    #div1::after{\n        width:50px;\n        height:50px;\n        bottom:0;\n        left:50%;\n        transform:translateX(-50%);\n        background:#000;\n        border-radius:50%;\n        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    }\n    \n",e="",t=0,d=()=>{setTimeout((()=>{"\n"===a[t]?e+="<br>":" "===a[t]?e+="&nbsp;":e+=a[t],n.innerHTML=e,r.innerHTML=a.substring(0,t),window.scrollTo(0,9999),n.scrollTo(0,9999),t<a.length-1&&(t+=1,d())}),10)};d()}();
//# sourceMappingURL=index.d855fe2d.js.map
