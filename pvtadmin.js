document.getElementById('passForm').addEventListener('submit',function(event){
  event.preventDefault();
  var password = document.getElementById('passInput').value;
  if(password === '909090'){
    alert('welcome admin')
    window.location.href="admin.html"
  }
  else{
    alert('You Are Not An Admin');
  }
});