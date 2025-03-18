const arrayOfHealthTips = [
    "Збалансоване харчування: Включайте більше фруктів та овочів у свій раціон!",
    "Регулярні фізичні навантаження допоможуть покращити ваше самопочуття.",
    "Не забувайте про важливість сну: 7-8 годин на добу - оптимальний режим для організму.",
    "Пийте більше води! Вода важлива для збереження енергії та хорошого настрою.",
    "Займайтесь йогой або медитацією для зниження стресу і покращення психічного здоров'я."
  ];
  
  
  let countOfPills = 5;
  
  
  const updatePillCount = () => {
    let pillContainer = document.getElementById("pill-count");
    pillContainer.innerHTML = ""; 
    for (let i = 0; i < countOfPills; i++) {
      const pill = document.createElement("span");
      pill.textContent = "💊"; 
      pill.style.fontSize = "25px";
      pill.style.marginRight = "5px";
 
      if (i >= 5 - countOfPills) {
        pill.style.color = "gray"; 
      }
      pillContainer.appendChild(pill);
    }
  };
  
  
  document.getElementById("btn_love_wishes").addEventListener("click", () => {
    if (countOfPills > 0) {
      
      let index = Math.floor(Math.random() * arrayOfHealthTips.length);
      document.getElementById("love-wishes").innerText = arrayOfHealthTips[index];
  
      
      countOfPills--;
      updatePillCount();
  
      
      if (countOfPills === 0) {
        document.getElementById("btn_love_wishes").style.display = "none"; 
      }
    }
  });
  
  
  document.getElementById("buy-pill-btn").addEventListener("click", () => {
    if (countOfPills < 5) {
      countOfPills = 5; 
      updatePillCount();
      document.getElementById("btn_love_wishes").style.display = "block"; 
    }
  });

  let arrayOfImages = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg"
  ];
  
  let galleryImage = 1;
  
  function updateImage() {
    document.getElementById("main-image").setAttribute('src', 'img/gallery/' + arrayOfImages[galleryImage]);
  }
  
  document.getElementById('right-arrow').addEventListener('click', () => {
    galleryImage++;
  
    if (galleryImage >= arrayOfImages.length) {
      galleryImage = 0;
    }
  
    updateImage();
    console.log(galleryImage);
  });
  
  document.getElementById('left-arrow').addEventListener('click', () => {
    galleryImage--;
  
    if (galleryImage < 0) {
      galleryImage = arrayOfImages.length - 1;
    }
  
    updateImage();
    console.log(galleryImage);
  });
  
  

  const arrayOfObjects = [
   { 
    id:"1",
    title:"Аевіт",
    photo:"",
    descripyion:"",
    rating:"",
    type:""

  },
  { 
    id:"2",
    title:"Вітамін С",
    photo:"",
    descripyion:"",
    rating:"",
    type:""

  },

  ]
  console.log(arrayOfObjects)

  arrayOfObjects.forEach((item) =>{console.log(item)

    let divVitamin = document.createElement('div')
    divVitamin.innerText = item.title
    divVitamin.classList.add('vitamin')

    document.getElementById("p-vitamins").appendChild(divVitamin)







  })
  

