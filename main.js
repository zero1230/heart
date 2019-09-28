let html = document.querySelector('#html')
let style = document.querySelector('#style')
let strings = `/*你好，亲爱的马璐莎。
*我是张文杰。
*是个程序员。
*接下来我要制作个小动画给你看。
*接下来我要加样式了
**/
#heart{
  display: inline-block;
  margin-top:20vh; 
  left:50%;
  transform: translateX(-50%);
  position: fixed;
}
#heart>.left{
  background: red;
  width: 100px;
  height: 100px;
  position: absolute;
  transform: rotate(45deg) translateX(62px);
  bottom: 100px;
  left: -100px;
  border-radius: 50% 0 0 50%;
}
#heart>.right{
  background: red;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transform: rotate(45deg) translateY(62px);
  bottom: 100px;
  right: -100px;
  border-radius: 50% 50% 0 0;
}
#heart>.bottom{
  background: red;
  width: 100px;
  height: 100px;
  transform: rotate(45deg);
}
/*接下来加一个动画,使爱心跳起来。
**/
#heart{
    animation: .5s heart infinite alternate-reverse;
    margin-left:-40px;
}
`
let string2 = ''
let n = -1

step()
setTimeout(()=>{
    words.classList.add('active')
},16000)


function step() {
    setTimeout(() => {
        n += 1
        if (strings[n] === '\n') {
            string2 += "</br>"
        }
        else if (strings[n] === ' ') {
            string2 += "&nbsp"
        }
        else {
            string2 += strings[n]
        }
        html.innerHTML = string2
        style.innerHTML = strings.substring(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)
        if (n < strings.length - 1) {
            step()
        }
    }, 10)



}