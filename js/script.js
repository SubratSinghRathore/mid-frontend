let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}

// function login() {
//    const email = document.getElementById("email").value
//    const pass = document.getElementById("pass").value

   
//       const url = "https://student-backend-inw1.onrender.com/login";
      
//       const requestData = {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify({ email, pass })
//       };
  
//       fetch(url, requestData)
//           .then(response => {
//               if (!response.ok) {
//                   throw new Error(`HTTP error! Status: ${response.status}`);
//               }
//               return response.json();
//           })
//           .then(data => console.log(data))
//           .catch(error => {
//               console.error("Error logging in:", error);
//               return { error: error.message };
//           });
  

// }

async function login() {
   const email = document.getElementById("email").value;
   const pass = document.getElementById("pass").value;
   await fetch(`https://student-backend-inw1.onrender.com/login?email=${email}&&pass=${pass}`, {
       method: "GET",
       headers: { 'Content-type': 'application/json' }
   })
       .then(res => {
         if(res.ok) {
            document.getElementById("login_div").classList.remove("hide");
         }
       })
       .then(res => {
           return res.json();
       })
       .then(res => {
           localStorage.setItem('username', res.username)
       })
}