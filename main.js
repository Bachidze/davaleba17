const h2 = document.querySelectorAll('.h2')
const paragraph = document.querySelectorAll('.paragraph')
const arrow = document.querySelectorAll('.arrow')

for(let i = 0;i<h2.length;i++){
    h2[i].addEventListener('click',() =>{
        paragraph[i].classList.toggle('act')
        h2[i].classList.toggle('bold')
        arrow[i].classList.toggle('turn')
        for(let j = 0;j<h2.length;j++){
            if(j !==i){
                paragraph[j].classList.remove('act')
                h2[j].classList.remove('bold')
            }
        }
        
    })
}
for(let i = 0;i<h2.length;i++){
    arrow[i].addEventListener('click',() =>{
        paragraph[i].classList.toggle('act')
        h2[i].classList.toggle('bold')
        arrow[i].classList.toggle('turn')
        for(let j = 0;j<h2.length;j++){
            if(j !==i){
                paragraph[j].classList.remove('act')
                h2[j].classList.remove('bold')
            }
        }
    })
}

