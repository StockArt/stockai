document.getElementById('passForm').addEventListener('submit',function(event){
  event.preventDefault();
  var password = document.getElementById('passInput').value;
  if(password === '987654'){
    alert('WELCOME PREMIUM USER')
    window.location.href=";).html"
  }
  else{
    alert('You Are Not An Premium User');
  }
});