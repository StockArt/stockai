document.getElementById('passForm').addEventListener('submit',function(event){
  event.preventDefault();
  var password = document.getElementById('passInput').value;
  if(password === '472894'){
    alert('welcome admin')
    window.location.href="https://drive.google.com/drive/folders/104TM30xqTJ6FOo3XGIvJM_HWca4ekGrh"
  }
  else if(password==='898098'){
    alert('welcome user')
    window.location.href="https://drive.google.com/drive/folders/104TM30xqTJ6FOo3XGIvJM_HWca4ekGrh"
  }
  else if(password==='892803'){
    alert('Welcome Killer')
    window.location.href="https://drive.google.com/drive/folders/104TM30xqTJ6FOo3XGIvJM_HWca4ekGrh"
  }
  else{
    alert('incorrect 18p code');
  }
});