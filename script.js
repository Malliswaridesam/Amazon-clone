const image=document.querySelectorAll('.head_slider ul img');
const prev_btn=document.querySelector('.control_previous');
const next_btn=document.querySelector('.control_next');

let n=0;
function slidechange(){
for(let i=0;i<image.length;i++){
    image[i].style.display='none';
}
image[n].style.display='block';
}
slidechange();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=image.length-1;
    }
    slidechange();
})
next_btn.addEventListener('click',()=>{
    if(n < image.length -1){
        n++
    }
    else{
        n=0;
    }
    slidechange();
})
const images=document.querySelectorAll('.product_slide div img');
const ctrl_prev=document.querySelector('.control_pre');
const ctrl_nxt=document.querySelector('control_nxt');

