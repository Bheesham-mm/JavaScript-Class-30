// Picture Show
var display = document.querySelector(".display");
var input = document.querySelector("#upload");
var img = document.querySelector("img1");

// Generate function
function generat() {
    // select elements 1
    var name = document.getElementById('firstname').value;
    var fName = document.getElementById('fname').value;
    var dob = document.getElementById('dob').value;
    var rNumer = document.getElementById('rname').value;
    var address = document.getElementById('address').value;
    // console.log(fName)
    // add value
    document.getElementById('user-Name').innerText = name;
    document.getElementById('user-fName').innerText = fName;
    document.getElementById('user-DOB').innerText = dob;
    document.getElementById('user-rNum').innerText = rNumer;
    document.getElementById('user-Address').innerText = address;

    // image viewer
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.addEventListener("load", () => {
        display.innerHTML = `<img src=${reader.result} alt=''/>`;
    });

    // Print Page
    var printA = document.getElementById('print');
    printA.innerHTML = '<button onclick="printPage()" class="formbold-btn">Print</button>'
}
function printPage() {
    var bodyElement = document.getElementById('bodyElement').innerHTML;
    var data = document.getElementById('Data').innerHTML;
    // console.log(data)
    document.getElementById('bodyElement').innerHTML = data;
    window.print()
    document.getElementById('bodyElement').innerHTML = bodyElement;

}
