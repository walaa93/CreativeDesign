// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");


if(mainColors !== null){

  document.documentElement.style.setProperty('--main--color',mainColors);

  // Remove Active Class From All Childrens
  document.querySelectorAll(".colors-list li").forEach(element=>{

    element.classList.remove('active');

    // Add Active Class On Element with Data-Color === Local Storage Item

    if(element.dataset.color === mainColors){

      // Add Active Class

      element.classList.add('active')
    }
   
  });

  


}
// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval

let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem('background_option');

// Check If Random Background Local Storage Is Not Empty
if(backgroundLocalItem !== null){

  // console.log(backgroundLocalItem);
  // console.log(typeof(backgroundLocalItem))
  document.querySelectorAll('.random-backgrounds span').forEach(el=>{

    el.classList.remove('active')

  });

  if(backgroundLocalItem === 'true'){

    backgroundOption = true;
   
    document.querySelector('.random-backgrounds .yes').classList.add('active')

  }else{

    backgroundOption = false;
    document.querySelector('.random-backgrounds .no').classList.add('active')

  }
  
  
  // console.log(backgroundLocalItem)
  // Remove Active Class From All Spans
  
}



// Toggle Spin Class On Icon
let toggleGear = document.querySelector(".toggle-settings");
let settingContent = document.querySelector(".settings-box");

  // Click On Toggle Settings Gear 
  toggleGear.addEventListener("click",()=>{

  // Toggle Class Fa-Spin For Rotation On Self
  document.querySelector(".toggle-settings i").classList.toggle("fa-spin");
  // Toggle Class Open On Main Settings Box
  settingContent.classList.toggle("open")
})

///////////////////////////////////////////////////////////////////////////////////////////
// Switch Color
const colorsLi = document.querySelectorAll('.colors-list li');
colorsLi.forEach(colorLi => {
  colorLi.addEventListener("click",(e)=>{
    // console.log(e.target.getAttribute("data-color"))
    // console.log(e.target.dataset.color);

    // Set Color On Root
    document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
  
    // Set Color On Local Storage
    localStorage.setItem('color_option',e.target.dataset.color)
    // document.documentElement.style.setProperty('--main--color',e.target.getAttribute("data-color"))

    handleActive(e)
    

   
  })
});

///////////////////////////////////////////////////////////////////////////////////////////
// Switch Random Background Option
const randomBackEl = document.querySelectorAll('.random-backgrounds span');

// Loop On All Spans

randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener("click",(e)=>{
    
    handleActive(e)

    if(e.target.dataset.background == 'yes'){
      backgroundOption = true;
      randomizeImgs()
      localStorage.setItem('background_option',true)
      
    }else{
     
      backgroundOption =false;
      clearInterval(backgroundInterval)
      localStorage.setItem('background_option',false)
    }

  })
});
////////////////////////////////////////////////////////////////////////////////////////////
// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// Get Array Of Imgs
let imgsArray = ["back-1.jpg","back-2.jpg","back-3.jpg","back-4.jpg","back-5.jpg"]



// Function To Randomize Imgs
function randomizeImgs(){

  if(backgroundOption == true){
    backgroundInterval= setInterval(()=>{
      // Get Random Number
      let randomNumber = Math.floor(Math.random()* imgsArray.length)
      // Change Background Image Url
      landingPage.style.backgroundImage = 'url("images/'+  imgsArray[randomNumber]+'")'
      landingPage.style.transition = 'all .5s ease-in-out '
    },10000)
  }
}
randomizeImgs()
////////////////////////////////////////////////////////////////////////////////////////////////

//Select Skill Selector
let ourSkills = document.querySelector('.skills');
window.onscroll = function(){

  // Skills OffsetTop
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight

  // Window Height
  let windowHeight = this.innerHeight

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset

  // console.log(skillsOffsetTop + skillsOuterHeight -windowHeight)
  if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight -windowHeight)){
    
    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
    allSkills.forEach(skill=>{
      // skill.style.width = skill.getAttribute("data-progress")
      skill.style.width = skill.dataset.progress;
    })
  }

}
/////////////////////////////////////////////////////////////////
// Create Popup With The Image
let ourGallery = document.querySelectorAll('.gallery img')


ourGallery.forEach(img =>{

  img.addEventListener('click',(e)=>{

    // Create Overlay Element
    let overlay = document.createElement('div');

    // Add Class To Overlay
    overlay.className="popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className="popup-box";

    
    if(img.alt !== null){

      // Create Heading
      let  imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading 
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading)
    }

    // Create The Image
    let popupImage = document.createElement("img");
    
    // Set Image Source 

    popupImage.src = img.src

    // Add Image To popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox)

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = "close-button";

    // Add Close Button To The POpup Box
    popupBox.appendChild(closeButton)
  });
});
// Close PopUp
document.addEventListener("click",function (e){
  if(e.target.className =="close-button" ){

    
    // Remove The Current Popup
    e.target.parentNode.remove();
    // Remove Overlay
    document.querySelector('.popup-overlay').remove();
    

    
  }

})


//////////////////////////////

// document.addEventListener("click",function (e){
//   if(e.target.className === "popup-overlay"){

//     // Remove Overlay
//     document.querySelector(".popup-overlay").remove();

//     // Remove The Current Popup
//     document.querySelector('.popup-box').remove();

    
//   }
// })

//////////////////////////////////////////////////////////////////////////////////////////

// Select All Bullets
const allBullet = document.querySelectorAll(".nav-bullets .bullet") ;

// Select All Links
const allLinks = document.querySelectorAll(".links a") ;


function scrollToSomeWhere(elements){
  elements.forEach(element =>{

    element.addEventListener("click",(e)=>{
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:'smooth'
      });
    });
  })
}

scrollToSomeWhere(allBullet);
scrollToSomeWhere(allLinks);

// Handle Active State
function handleActive(ev){
  // Remove Active Class From All Spans
  ev.target.parentElement.querySelectorAll(".active").forEach(element=>{

    element.classList.remove('active')
   
  });
  // Add Active Class On Self
  ev.target.classList.add('active')
}

//////////////////////////////////////////////////////////////

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem("bullets_option");

if(backgroundLocalItem !==null){

  bulletsSpan.forEach(span =>{
    span.classList.remove('active')
  });

  if(bulletLocalItem === 'show'){
    bulletsContainer.style.display="block";

    document.querySelector('.bullets-option .yes').classList.add('active');
  }else{

    bulletsContainer.style.display="none";
    document.querySelector('.bullets-option .no').classList.add('active');
  }

  
}

bulletsSpan.forEach(span =>{
  span.addEventListener("click",(e) => {
    if (e.target.dataset.display == "show"){
      bulletsContainer.style.display="block";
      localStorage.setItem("bullets_option" ,"show")
    }else{
      bulletsContainer.style.display="none";
      localStorage.setItem("bullets_option" ,"hide")
    }
    handleActive(e);
  })
})

////////////////////////////////////////////////////////////////
// Reset Button

document.querySelector(".reset-options").onclick = function(){

  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload()
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){

  // Stop Propagation
  e.stopPropagation()

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

}

// Click Any Where Outside Menu And Toggle Button

document.addEventListener("click", (e) =>{

  console.log(e.target)
  
    
  if(e.target !== toggleBtn && e.target !== tLinks){

    console.log("this is not the button and not the menu")

    // Check If Menu Is Open
    if(tLinks.classList.contains('open')){
      console.log("menu is open")
      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }
  }
 

})


// Stop Propagation On Menu

// tLinks.onclick= function(e){
//   e.stopPropagation()
// }























































































// Select Landing Page Element
/*
let landingPage=document.querySelector('.landing-page');

// Get Array Of Imgs

let imgsArray=['back-1.jpg','back-2.jpg','back-3.jpg','back-4.jpg','back-5.jpg'];

// Change Background Image Url

landingPage.style.backgroundImage='url(template11images/back-2.jpg)'

// Get Random Number
/*
setInterval(()=>{
  let randomNumber=Math.floor(Math.random()*imgsArray.length);
   console.log(randomNumber)        // لو فضل كدا هيفضل كل ثانيه يطبع رقم 2 وعشان نخليه يطبع كل ثانيه رقم مختلف نحط المتغير داخل ال setInterval
},1000)
*/
/*
setInterval(()=>{
    let randomNumber=Math.floor(Math.random()*imgsArray.length);
    landingPage.style.backgroundImage='url("template11images/'+imgsArray[randomNumber]+'")'     
},10000);*/