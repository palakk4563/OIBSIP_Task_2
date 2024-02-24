// -------------about me ----------
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    for(tabcontent of tabcontents )
    tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add('active-link');
   document.getElementById(tabname).classList.add("active-tab");
}
// -----------------------------------------------------

// ------------------Contact-------------
const scriptURL =
        ""; //add google sheet "contact form" script url
      const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML="Message Sent Successfully...."
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
          })
          .catch((error) => console.error("Error!", error.message));
      });

// -----------------------Sticky Nav-----------------------

window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})
