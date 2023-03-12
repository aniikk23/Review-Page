const reviews = [
    {
        id:1,
        name: "Mathew Smith",
        job: "Front-end developer",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
        img: "./picts/Mathew-Smith.jpg"
    },
    {
        id:2,
        name: "Morgan Stanley",
        job: "Back-end developer",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        img: "./picts/Morgan-Stanley.jpg"
    },
    {
        id:3,
        name: "Zack Addams",
        job: "Senior Developer",
        text: "Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 ",
        img: "./picts/Zack-Addams.jpg"
    },
    {
        id:4,
        name: "Cori Devis",
        job: "Ux Designer",
        text: "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        img: "./picts/Cori-Devis.jpg"
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')


const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")


let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson( currentItem)
});


function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}



nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})


randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})

