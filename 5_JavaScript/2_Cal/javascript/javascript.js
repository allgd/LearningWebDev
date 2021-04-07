var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event){
  if (!numField1.value || !numField2.value) {
    alert("please enter values in fields");
  }else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var r = x/y*100;
    alert(x/y*100);
    resultField.innerText = "Result = "  + r +"%";
    event.preventDefault();
  }
});

// numField2.value = "teest";
// resultField.innerText = "Test 2"



// look diff input submit || button
