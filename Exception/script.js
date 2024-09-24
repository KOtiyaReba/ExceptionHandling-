var btn1 = document.getElementById("btn1");
var err1 = document.getElementById("err1");

// function display() {
//   alart("Btn clicked");
// }

function display(){
    try {
        alart("btn clicked")
    } catch (error) {
        err1.innerText=error.message
    }
}

function check(){
    console.log("button clicked");
    var x = document.getElementById('val').value ;
    var msg = document.getElementById('msg');
   try{
        if(x=='') throw "Box cannot be empty";
        if(isNaN(x)) throw "Value is not a number";
        if(x<10) throw " value is too small";
        if(x>20) throw "value is too high";
   }
   catch(error){
    msg.innerText= error
   }
finally{
    document.getElementById('val').value = "";
    msg.innerText=  ""

}
}