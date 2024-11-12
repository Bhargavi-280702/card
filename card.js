const cardcontainer=document.querySelector('#cardcontainer1');
cardcontainer1.style.display="flex";
cardcontainer1.style.justifyContent="center";
cardcontainer1.style.gap="20px";

const card1=document.querySelector('#card1');
card1.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco7FtpLITWD2tMOOm1A6z0fQBTT2ZYViPiQ&s" width="100%" height="150px">
<p>Beautiful Flowers</p>
<button>Explore More</button>`;
card1.style.border="2px solid black";
card1.style.backgroundColor="lightgray";
card1.style.display="inline-block";
card1.style.padding="10px";
card1.style.width="300px";
card1.style.height="400px";
card1.style.display = "flex";
card1.style.flexDirection = "column";
card1.style.alignItems = "center";  
card1.style.justifyContent = "center"; 

const card2=document.querySelector('#card2');
card2.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrmDaE9mkj4l2TiZhdozch-rfIH830cp14Q&s" width="100%" height="150px">
<p>Beautiful Flowers</p>
<button>Explore More</button>`;
card2.style.border="2px solid black";
card2.style.backgroundColor="lightgray";
card2.style.display="inline-block";
card2.style.padding="10px";
card2.style.width="300px";
card2.style.height="400px";
card2.style.display = "flex";
card2.style.flexDirection = "column";
card2.style.alignItems = "center"; 
card2.style.justifyContent = "center"; 


const cardcontainer2=document.getElementById('cardcontainer2');
cardcontainer2.style.display="flex";
cardcontainer2.style.justifyContent="center";
cardcontainer2.style.gap="20px";

const card3=document.createElement('div')
card3.innerHTML=`<img src="https://i.pinimg.com/originals/82/97/71/829771f39c7c04cff843bf8088e8e3ce.jpg" width="100%" height="150px"/>
<p>Beautiful Flowers</p>
<button>Explore More</button>`;
card3.style.border="2px solid black";
card3.style.backgroundColor="lightgray";
card3.style.display="inline-block";
card3.style.padding="10px";
card3.style.width="300px";
card3.style.height="400px";
card3.style.display = "flex";
card3.style.flexDirection = "column";
card3.style.alignItems = "center"; 
card3.style.justifyContent = "center"; 
card3.style.marginTop="20px";
cardcontainer2.appendChild(card3);

const card4=document.createElement('div')
card4.innerHTML=`<img src="https://plus.unsplash.com/premium_photo-1711246567314-597d57ad975d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VycyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" width="100%" height="150px"/>
<p>Beautiful Flowers</p>
<button>Explore More</button>`;
card4.style.border="2px solid black";
card4.style.backgroundColor="lightgray";
card4.style.display="inline-block";
card4.style.padding="10px";
card4.style.width="300px";
card4.style.height="400px";
card4.style.display = "flex";
card4.style.flexDirection = "column";
card4.style.alignItems = "center"; 
card4.style.justifyContent = "center"; 
card4.style.marginTop="20px";
cardcontainer2.appendChild(card4);