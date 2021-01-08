document.getElementById('btnSubmit').onclick = function(e){
    name = document.getElementById('inName').value
    document.getElementById('hello').innerText = "Drop Dead " + name    
  }