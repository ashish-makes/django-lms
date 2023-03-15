
// ------------------ Desktop Categories ------------------

const CategoryMenu = document.querySelector('.desktop-categories');
const CategoryMenuBtn = document.querySelector('.desktop-categories-btn');

CategoryMenuBtn.addEventListener('click', () => {
    CategoryMenu.classList.toggle('show');
});

// displays the menu on hover

// CategoryMenuBtn.addEventListener('mouseenter', () => {
//   CategoryMenu.classList.add('show');
// });

// CategoryMenu.addEventListener('mouseleave', () => {
//   CategoryMenu.classList.remove('show');
// });

window.addEventListener('click', (event) => {
    if (!event.target.closest('.desktop-categories') && !event.target.closest('.desktop-categories-btn')) {
        CategoryMenu.classList.remove('show');
    }
});


// ------------------ Mobile Devices Navebar ------------------

const mobMenuBtn = document.querySelector('.menubtn');
const mobMenuCloseBtn = document.querySelector('.menuClosebtn');
const mobMenu = document.querySelector('.mob-menu');

// donot changes the menu icon to x

// mobMenuBtn.addEventListener('click', () => {
//     mobMenu.classList.toggle('show');
// })

// mobCategoriesBtn.addEventListener('click', () => {
//     mobCategoriesMenu.classList.toggle('show');
// })

// changes menu icon to x

mobMenuBtn.addEventListener('click', () => {
    mobMenu.style.display='block';
    mobMenuBtn.style.display='none';
    mobMenuCloseBtn.style.display='block';
})

mobMenuCloseBtn.addEventListener('click', ()=> {
    mobMenu.style.display='none';
    mobMenuBtn.style.display='block';
    mobMenuCloseBtn.style.display='none';
})

window.addEventListener('click', (event) => {
    if (!event.target.closest('.mob-menu') && !event.target.closest('.menubtn')) {
      mobMenu.style.display = 'none';
      mobMenuBtn.style.display = 'block';
      mobMenuCloseBtn.style.display = 'none';
    }
});

//  ------------------ Mobile Devices Categories ------------------

const mobCategoriesBtn = document.querySelector('.categories-btn');
const mobCategorieClosesBtn = document.querySelector('.categories-close-btn');
const mobCategoriesMenu = document.querySelector('.mob-categories');
const mobCategoriesParent = document.querySelector('.categories-btn').parentNode;

// mobCategoriesBtn.addEventListener('click', () => {
//     mobCategoriesMenu.classList.toggle('show');
// })

// mobCategoriesBtn.addEventListener('click', () => {
//     mobCategoriesMenu.style.display='block';
//     mobCategoriesBtn.style.display='none';
//     mobCategorieClosesBtn.style.display='block';
// })

// mobCategorieClosesBtn.addEventListener('click', () => {
//     mobCategoriesMenu.style.display='none';
//     mobCategoriesBtn.style.display='block';
//     mobCategorieClosesBtn.style.display='none';
// })

let isCategoriesOpen = false;

mobCategoriesParent.addEventListener('click', () => {
    isCategoriesOpen = !isCategoriesOpen;
    mobCategoriesMenu.style.display = isCategoriesOpen ? 'block' : 'none';
    mobCategoriesBtn.style.display = isCategoriesOpen ? 'none' : 'block';
    mobCategorieClosesBtn.style.display = isCategoriesOpen ? 'block' : 'none';
});

//  ------------------ FAQ ------------------

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const ques = faq.querySelector(".question");
  const ans = faq.querySelector(".answer");

  ques.addEventListener("click", () => {
    ans.classList.toggle("show");
  });
});