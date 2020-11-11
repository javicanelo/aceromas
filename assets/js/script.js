const images = document.querySelectorAll('.img')
const containerImage = document.querySelector('.container-img')
const imageContainer = document.querySelector('.img-show')

images.forEach(image =>{

    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'))
    
    })
})

const addImage = (srcImage, alt)=>{
    containerImage.classList.toggle('move')
    imageContainer.classList.toggle('show')
    imageContainer.src = srcImage;
}

containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move')
    imageContainer.classList.toggle('show')
})