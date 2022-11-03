function press(val){
    console.log(val)
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function wipeOff(){
   document.getElementById("screen").value=""
}

function equalClick(){
    var text= document.getElementById("screen").value
    var result=eval(text)
    console.log(result)
    document.getElementById('screen').value=result

}