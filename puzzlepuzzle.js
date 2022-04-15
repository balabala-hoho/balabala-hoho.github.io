function playerName(){
  var name = prompt("What's your name?");
  alert(name + "，欢迎欢迎！");
}
playerName()

function enterAnswer(){
  var answer = prompt("您的答案是：");
  if (answer == "鸡23只，兔12只"){
    alert("是的是的就是酱紫")
  }
  else{
    alert("这个答案不对哦")
  }
}

function getAnswer(){
  alert("正确答案是：鸡23只，兔12只");
}

function getHint(){
  var hint = ["我们假设所有鸡和兔子都抬起一只脚","然后再全都抬起一只脚/doge","鸡扑通一声坐下了，兔子还有两只脚/doge","这时兔子一只对应两只脚，后面交给大家/doge"];
  for(i=0;i<4;i++){
    alert(hint[i])
  }
}
