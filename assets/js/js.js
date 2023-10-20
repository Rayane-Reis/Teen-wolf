const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left');
        
        if(isLeft){
            currentItem -=1;
        }else{
            currentItem +1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem <0){
            currentItem = maxItems - 1;
        }

        items.forEach(item =>item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline:"center",
            behavior:"smooth"
        });

        console.log("control", isLeft,currentItem);
    })
});


// RELACIONADO AO SLIDE DA SINOPSE 

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    maxImage();
}, 3000)

function maxImage(){
    count++;
    if(count > 4){
        count= 1;
    }

    document.getElementById("radio"+count).checked = true;
}