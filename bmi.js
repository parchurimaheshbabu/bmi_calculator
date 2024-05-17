const cal = () => {
  //      var continue1 = true;
  //       while (continue1) {

  const mass = document.getElementById("mass").value;
  const height = document.getElementById("height").value;
  var result = document.getElementById("result");

  if (mass==''| height==''){
// alert('Fill All The Fields')
    // result.innerHTML = "Fill all the fields";
    // result.style="color:red"
errmsg()
  }
  else {
  const rd=document.getElementById('reload')
  // var result = document.getElementById("result");
  const bmi = mass / (height / 100) ** 2;

  if (bmi < 18.5) {
    result.innerHTML = "You Are under weight";
    rd.style="display:block "

  } else if (bmi < 25) {
    result.innerHTML = "You Are Healthy";
        rd.style = "display:block ";

  } else if (bmi < 29) {
    result.innerHTML = "You Are Over weight";
        rd.style = "display:block ";

  } else if (bmi > 29) {
    result.innerHTML = "Obese";
        rd.style = "display:block ";

  }

  }

  
};

function refresh() {
  location.reload();
}
renew=()=>
  {
    result.innerHTML='';
  }
function errmsg(){
  var result = document.getElementById("result");
 result.innerHTML = "Fill all the fields";
  result.style = "color:red";
  setTimeout(renew,1000)
}