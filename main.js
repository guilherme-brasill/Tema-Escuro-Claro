const toggleBtn = document.getElementById('toggle-mode');
const body =  document.body;
const header = document.getElementById('header');

toggleBtn.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
    header.classList.toggle("dark-mode-header")
   body.classList.toggle("dark-mode:hover")
} 
 )
