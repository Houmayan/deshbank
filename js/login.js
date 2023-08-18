const dc = document;

dc.getElementById('btn-submit').addEventListener('click',function(){
  // console.log("submit button clicked");
  const emailField = dc.getElementById('email-field');
  const email = emailField.value;

  const passwordField = dc.getElementById('password-field');
  const pass = passwordField.value;
  // console.log(email, pass);
  if(email == 'alichy101@gmail.com' && pass== 11111){
    window.location.href = 'bank.html';
  }
  else{
    alert("invalid");
  }



})