var txt1 = document.getElementById("txt1");
function change() {
  console.log("clicked");
  //   step 1 initialize the request
  var xhttp = new XMLHttpRequest();
  //   step 4 checking the ready state change
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var data = JSON.parse(this.responseText);
      //   txt1.innerText = this.responseText;
      let val = "";
      for (let i = 0; i < data.length; i++) {
        val += `<li>${data[i].name}</li>`;
        txt1.innerHTML = val;
      }
    }
  };

  //   step 2 create the request
  //   xhttp.open("GET", "data.json", true);
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  //   step 3 sending the request
  xhttp.send();
}
