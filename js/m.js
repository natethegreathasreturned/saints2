const form = document.querySelector('.contact_form')

//function to send the message when click on button send
function sendMsg(e){
  e.preventDefault();
     const name = document.querySelector('.name'),
        email = document.querySelector('.email'),
        msg = document.querySelector('.msg');


   // Function Send Email ... 
   Email.send({
  SecureToken : "83a17087-fd68-43dc-a627-ab6d46337613",
  To : 'dogs8774@gmail.com',
  From : "email.value",
  Subject : "Contact Form",
  Body : msg.value
  }).then(
message => alert(message)
);
}

 //add the event Listenr submit
 form.addEventListener('submit', sendMsg);