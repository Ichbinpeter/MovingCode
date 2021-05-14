let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/* 你好,我是一名前端新人
接下来我要加样式了
我要加的样式是 */
#div1{ 
    width:100px;
    height:100px;
}
/* 接下来要变太极图啦
先把div变成一个圆形
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 太极图是阴阳形成的，
一黑一白
 */
    #div1{
        background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }

    /* 加两个神秘的小球 */
    #div1::before{
        width:50px;
        height:50px;
        top:0;
        left:50%;
        transform:translateX(-50%);
        background:#fff;
        border-radius:50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    }

    #div1::after{
        width:50px;
        height:50px;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        background:#000;
        border-radius:50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    
` 
let string2 = "";//""表示空(不是空格).

let n = 0;

let step = () => {
    setTimeout(() => {
        //如果是回车,就不照搬
        //如果是回车就照搬  
       
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {//注意:空格是" ",不是"",后者表示没有.
            string2 += "&nbsp;";
        } else {
           string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);

        window.scrollTo(0, 9999)
        html.scrollTo(0,9999)
 
        if (n < string.length - 1) {
            //如果n不是最后一个,就继续
            n += 1;//n += 1等价于n = n + 1;
            step();
        }
        
    }, 10)
}

step();



/* let style = document.querySelector('#style');
setTimeout(() => {
    style.innerHTML = `
    body{
        color:red;
    }
    `
},1000) */
