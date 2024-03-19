"use strict"
let height = window.prompt("身長を入力してください。");
if(height == false){
    window.alert("文字入力がないと判定できません")
}else
if(height >= 100){
    let reply = window.confirm("プレミアムチケットを持っていますか？");
    if(reply === true){
        window.alert("プレミアムシートに乗車可能です");
    }else{
        window.alert("通常シートに乗車可能です。");
    }
}else
if(height <= 90){
    if(height >= 90){
        window.alert("付き添いありで乗車可能です");
    }else{
        window.alert("乗車不可です");
    }
    
}else{
    window.alert("半角で入力してください");
}