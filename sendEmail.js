
document.getElementById("contactForm").addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("content").value;
    
    const mailtoLink = "mailto:ousama.lasri.com?subject=" + encodeURIComponent(subject) + 
    "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    
    window.location.href = mailtoLink;
})