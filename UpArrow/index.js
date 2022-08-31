
let arrow = document.getElementById('arrow');

window.onscroll = function(){
    let scroll = scrollY;

    if(scroll > 300){
        arrow.classList.add('active');
        
    }
    else{
        arrow.classList.remove('active');
    }
}