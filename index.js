const icon = document.querySelector(".menu");
const nav = document.querySelector(".navlogo nav");
icon.addEventListener("click", ()=>{
    nav.style.transform = "translateX(0)"
    // nav.style.display = "none"
})

// CLOSES NAVIGATION
const close_m = document.querySelector(".close");
const nave = document.querySelector("header nav");
close_m.addEventListener("click", ()=>{
    nave.style.transform = "translateX(-150%)";
   
})


// 1. Find the button
const scrollBtn = document.getElementById('contact');

// 2. Listen for a click
scrollBtn.addEventListener('click', function() {
  
  // 3. Find the target section and scroll to it smoothly
  document.getElementById('contacte').scrollIntoView({ 
    behavior: 'smooth' 
  });
  
});

const openBtn = document.querySelector(".book");
const fore = document.querySelector('#booke');
const ree = document.querySelector('.forme')
openBtn.addEventListener('click', () =>{
   fore.style.display = 'block';
})

const validateFor = ()=>{
    // alert("Success")
    //clear error message
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("invalid"));
    const errors = document.querySelectorAll(".error");
    errors.forEach((error)=> error.textContent = "");
    const messages = document.querySelectorAll("textarea");
    messages.forEach((message) => message.classList.remove("invalid"));

    const email = document.querySelector(".emai");
    const emailee = document.querySelector(".emai").value;
    const email_err = document.querySelector(".email-err");
    const val = document.querySelector(".valid")
    if(email.value == ""){
        email_err.textContent = "This field is required";
        email.classList.add("invalid")
        // return false;
    }
    else if(!email.value.includes('@'),!email.value.includes('.com')){
        val.textContent = "Please enter a valid email address"
        email.classList.add("invalid")  
        // return false;
    }
      const message = document.querySelector("#message");
    const mess = document.querySelector("#message").value;
    const message_err = document.querySelector(".message-err");
    const elnths = document.querySelector(".length");
    const numbere = document.querySelector(".num");
    if (message.value == ""){
        message_err.textContent = "This field is required";
        message.classList.add("invalid");
       // return false;
    } 
    else if(!isNaN(mess)){
        numbere.textContent = "Please enter an understandable message";
        message.classList.add("invalid");
    }
    //  else if(!isNaN(mess).length >=1 ){
    //     numbere.textContent = "Please enter an understandable message";
    //     message.classList.add("invalid");
    // }
    
    else if (mess.length >= 1 && mess.length < 30){
        elnths.textContent = "Please let your message to be more detailed";
        message.classList.add("invalid");
    }
}
      
   
    

ree.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateFor();


 const active = document.querySelectorAll('.error');
 const success = document.querySelector(".sucsess")
    let hasActiveErrors = false;

    active.forEach((elements)=>{
        if(elements.textContent.trim() !== ""){
            hasActiveErrors = true;
        }
    });

   
    if(!hasActiveErrors){
        // forms.classList.add('sucsess')
        success.style.display = 'block'
         fore.style.display = 'none';
        forms.reset();
    }
    success.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
    setTimeout(()=>{
        success.style.display = 'none'
        
    },4000)
   
    });    

const consent = document.querySelector(".click");
const consent_err = document.querySelector(".consent-err")
const box = document.querySelector(".consent span");
const box_select = document.querySelector(".consent img");
let isTick = false;


 consent.addEventListener('click', ()=>{
    if(!isTick){
        box.style.display = 'none';
        box_select.setAttribute('src',"./images/icon-checkbox-check.svg");
        box_select.style.display = 'block';
        isTick = true;
    }
    else{
        box_select.style.display = 'none';
        box_select.removeAttribute("src");
        box.style.display = 'block';
        isTick = false;
    //     consent_err.textContent = "This field is required";
     }
})

const validateForm = ()=>{
    // alert("Success")
    //clear error message
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("invalid"));
    const errore = document.querySelectorAll(".error");
    errore.forEach((error)=> error.textContent = "");
    const messages = document.querySelectorAll("textarea");
    messages.forEach((message) => message.classList.remove("invalid"));
   
    
    // first name validation
    const firstname = document.querySelector(".firstnam");
    const firstname_err = document.querySelector(".firstname-err");
    const number = document.querySelector(".validity")
   
    if(firstname.value == ""){
       firstname_err.textContent = "This field is required";
       firstname.classList.add("invalid");
       isSuccess = false;
        // return false
    }
    else if(!isNaN(firstname.value)){
        number.textContent = "Please Enter a Valid First Name"
        firstname.classList.add("invalid");
    }
    
    // Last name validation
    const lastname = document.querySelector(".lastnam");
    const lastname_err = document.querySelector(".lastname-err");

    if(lastname.value == ""){
        lastname_err.textContent = "This field is required";
        lastname.classList.add("invalid");
        // return false;
    }
    

    // Email validation
    const email = document.querySelector(".ema");
    const emailee = document.querySelector(".ema").value;
    const email_err = document.querySelector(".email-er");
    const val = document.querySelector(".valid")
    if(email.value == ""){
        email_err.textContent = "This field is required";
        email.classList.add("invalid")
        // return false;
    }
    else if(!email.value.includes('@')){
        val.textContent = "Please enter a valid email address"
        email.classList.add("invalid")  
        // return false;
    }

    const message = document.querySelector("#message");
    const mess = document.querySelector("#message").value;
    const message_err = document.querySelector(".message-err");
    const elnths = document.querySelector(".length");
    const numbere = document.querySelector(".num");
    if (message.value == ""){
        message_err.textContent = "This field is required";
        message.classList.add("invalid");
       // return false;
    } else if(!isNaN(mess)){
        numbere.textContent = "Please enter an understandable message";
        message.classList.add("invalid");
    }
     else if(!isNaN(mess).length >=1 ){
        numbere.textContent = "Please enter an understandable message";
        message.classList.add("invalid");
    }
    
    else if (mess.length >= 1 && mess.length < 30){
        elnths.textContent = "Please let your message to be more detailed";
        message.classList.add("invalid");
    }
      
     if(!isTick){ 
        // box.style.display = 'none';
        consent_err.textContent = "To submit this form,please consent to being contacted"
    //     return false; 
    }
}

    const forms = document.querySelector('#form');
    forms.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();

    const activ = document.querySelectorAll('.erro');
    const succes = document.querySelector(".sucess")
    let hasActiveErrors = false;

    activ.forEach((elements)=>{
        if(elements.textContent.trim() !== ""){
            hasActiveErrors = true;
        }
    });

   
    if(!hasActiveErrors){
        // forms.classList.add('sucsess')
        succes.style.display = 'block'
        forms.reset();
    }
    succes.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    })
    setTimeout(()=>{
        succes.style.display = 'none'
        
    },5000)
   
    });    

   const navW = document.querySelector(".wrapper"); 
   const soluuu = document.querySelector(".sol");

   navW.addEventListener('mouseenter', () =>{
    soluuu.style.display= "block"

   });

   navW.addEventListener('mouseleave', () => {
    soluuu.style.display = 'none'

   });

   
     
     
