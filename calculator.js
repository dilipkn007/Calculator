// var on_click=document.getElementsByClassName("headerText")
var i=0;
function myFunction() {
    var element = document.body   
    element.classList.toggle("dark-mode")
    if(i%2===0){
        document.getElementById("a").setAttribute("style",`background-color:$(color);color:blue`);
        document.getElementById("Theme").setAttribute("style",`background-color:$(color);color:blue`);
        document.getElementById("calculatorResult").setAttribute("style",`background-color:$(color);color:blue`);
        // document.getElementsByClassName("key")[1].setAttribute("onMouseOver",`this.style.color=$(color);color:'blue'`);
        // onMouseOver="this.style.color='#0F0'"
    }
    if(i%2===1){
        document.getElementById("a").setAttribute("style",`background-color:$(color);color: rgb(251, 0, 0);`);
        document.getElementById("Theme").setAttribute("style",`background-color:$(color);color: rgb(251, 0, 0);`);
        document.getElementById("calculatorResult").setAttribute("style",`background-color:$(color);color:rgb(251, 0, 0);`);
        // document.getElementsByClassName("key")[1].setAttribute("style",`background-color:$(color);color:rgb(251,0,0);`);
    }
        i=i+1;
 }

Theme.addEventListener("click",function(){
    myFunction()
    
})

var a=document
// a.getElementById("a").innerHTML="sdjfjsd"

var expression=""
var result=""
var parameterCharacter=""
// const openBracket=document.getElementById("openBracket")
// const closeBracket=document.getElementById("closeBracket")
// const percentage=document.getElementById("percentage")
// const clear=document.getElementById("clear")
// const seven=document.getElementById("seven")
// const eight=document.getElementById("eight")
// const nine=document.getElementById("nine")
// const division=document.getElementById("division")
// const four=document.getElementById("four")
// const five=document.getElementById("five")
// const six=document.getElementById("six")
// const multiply=document.getElementById("multiply")
// const one=document.getElementById("one")
// const two=document.getElementById("two")
// const three=document.getElementById("three")
// const subtract=document.getElementById("subtract")
// const dot=document.getElementById("dot")
// const zero=document.getElementById("zero")
// const equals=document.getElementById("equals")
// const add=document.getElementById("add")
// const toggle=document.getElementById("Theme")

function changeExpression(parameterCharacter) {
    expression+=parameterCharacter
    document.getElementById("calculatorResult").innerHTML=expression
}
openBracket.addEventListener("click",function(){
    changeExpression("(")
})
closeBracket.addEventListener("click",function(){
    changeExpression(")")
})
percentage.addEventListener("click",function(){
    changeExpression("/100")
    // document.getElementById("calculatorResult").innerHTML=eval(expression+"/100")

})
clear.addEventListener("click",function(){
    expression=""
    result=""
   document.getElementById("calculatorResult").innerHTML=""
})
seven.addEventListener("click",function(){
    changeExpression("7")
})
eight.addEventListener("click",function(){
    changeExpression("8")
})
nine.addEventListener("click",function(){
    changeExpression("9")
})
division.addEventListener("click",function(){
    changeExpression("/")
})
four.addEventListener("click",function(){
    changeExpression("4")
})
five.addEventListener("click",function(){
    changeExpression("5")
})
six.addEventListener("click",function(){
    changeExpression("6")
})
multiply.addEventListener("click",function(){
    changeExpression("*")
})
one.addEventListener("click",function(){
    changeExpression("1")
})
two.addEventListener("click",function(){
    changeExpression("2")
})
three.addEventListener("click",function(){
    changeExpression("3")
})
subtract.addEventListener("click",function(){
    changeExpression("-")
})
dot.addEventListener("click",function(){
    changeExpression(".")
})
zero.addEventListener("click",function(){
    changeExpression("0")
})
equals.addEventListener("click",function(){
   evaluateResult()
})
add.addEventListener("click",function(){
    changeExpression("+")
})

// toggle.addEventListener("click",function(){
//     document.body.toggle("")
// })

// const d = new Date();
// var togglefor10sec=d.getSeconds();
// if(togglefor10sec<=10){
//     document.
// }

evaluateResult=()=>{
    try {
        result=eval(expression)
        if(result===undefined || expression===undefined || result===expression)
        {
            document.getElementById("calculatorResult").innerHTML="ERROR"
            expression=""
            result=""
        }
        else
        {
            expression=result
            document.getElementById("calculatorResult").innerHTML=expression
        }
    } catch (e) {
        document.getElementById("calculatorResult").innerHTML="ERROR"
        expression=""
        result=""
    }
}

document.addEventListener('keydown',function(event) {
    var keyPressed=event.key;
    if(keyPressed==="0")
    {
    parameterCharacter="0"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="1")
    {
    parameterCharacter="1"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="2")
    {
    parameterCharacter="2"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="3")
    {
    parameterCharacter="3"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="4")
    {
    parameterCharacter="4"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="5")
    {
    parameterCharacter="5"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="6")
    {
    parameterCharacter="6"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="7")
    {
    parameterCharacter="7"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="8")
    {
    parameterCharacter="8"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="9")
    {
    parameterCharacter="9"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="(")
    {
    parameterCharacter="("
    changeExpression(parameterCharacter);
    }
    if(keyPressed===")")
    {
    parameterCharacter=")"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="%")
    {
    parameterCharacter="/100"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="/" || keyPressed==="÷")
    {
    parameterCharacter="/"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="*" || keyPressed==="X" || keyPressed==="x")
    {
    parameterCharacter="*"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="-")
    {
    parameterCharacter="-"
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="+")
    {
    parameterCharacter="+"
    changeExpression(parameterCharacter);
    }
    if(keyPressed===".")
    {
    parameterCharacter="."
    changeExpression(parameterCharacter);
    }
    if(keyPressed==="=" || keyPressed==="Enter")
    {
        evaluateResult()
    }
    if( keyPressed==="Delete")
    {
       expression=""
       result=""
       document.getElementById("calculatorResult").innerHTML=""
    }
    if(keyPressed==="Backspace")
    {
        expression=expression.slice(0,expression.length-1)
        // result=expression
        document.getElementById("calculatorResult").innerHTML=expression
    }

})