/* eslint-disable linebreak-style */
function ajax() {
  const xhr = new XMLHttpRequest();
  const url = "http://localhost/";

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      document.getElementById("response").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

document.getElementById("boton").addEventListener("click", () => {
  ajax();
});
