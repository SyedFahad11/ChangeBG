var colors=["red","blue","green","yellow"]
//var randomColor=Math.round(Math.random()*5);
document.getElementsByTagName("button")[0].addEventListener("click",function(){
    var randomColor=Math.round(Math.random()*5);
    document.body.style.backgroundColor=colors[randomColor];
})