const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const  img1 = document.querySelector("#img1")
const text = document.querySelector("#text")


const images = [
    "https://img.freepik.com/free-photo/view-adorable-kitten-running-outdoors_23-2150758160.jpg?t=st=1719218955~exp=1719222555~hmac=849aa2ee8b452d77bbe98b50a3f6eab30d2eeb854bb0742c6e2f65469ca0508c&w=826",

    "https://nationalzoo.si.edu/sites/default/files/styles/wide/public/conservation/species-survival/department-animal-programs.jpg?itok=yfuLzS2k",

    "https://lazoo.org/wp-content/uploads/2023/06/Tiger-Male-CJ-Walking-Waterfall-JEP_8986.jpg",

    "https://rukminim2.flixcart.com/image/850/1000/l19m93k0/poster/u/d/5/small-wild-animal-painting-wall-art-horse-picture-for-living-original-imagcv7efr5peuby.jpeg?q=90&crop=false",

    "https://cdn.britannica.com/01/206301-131-5E90FE53/white-goat.jpg"
]

let indexnum = 0

btn1.addEventListener("click" ,function(){
    if(indexnum < images.length -1){
    img1.src = images[indexnum]
    indexnum++
   

    text.innerHTML = indexnum;
    }

    if(indexnum == images.length -1){
        text.innerHTML = "Dhamaad"
    }
})
 
btn2.addEventListener("click" ,function(){
    if(indexnum > 0){
        indexnum--
    img1.src = images[indexnum]
    }
})

