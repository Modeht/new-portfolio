
function hideOtherButtons(obj){    
    obj.parentNode.childNodes.forEach(node => {
        if (node.classList[0] == obj.classList[0]){
            return true;            
        }
        else{
            node.setAttribute('hidden','hidden');
        }                        
    });
}
function do_work(obj) {
    hideOtherButtons(obj);
    obj.classList.add('expand');
    obj.childNodes.forEach(node => {
        if(node.classList == 'bar'){
            node.lastElementChild.removeAttribute('hidden');
        };
        if(node.classList == 'body'){
            node.removeAttribute('hidden');
        }
    })
}

document.querySelector('.profile').addEventListener('click',function (){
    do_work(this);
});

document.querySelector('.github').addEventListener('click',function (){
    do_work(this);
});

document.querySelector('.phone').addEventListener('click',function (){
    do_work(this);
});

document.querySelector('.mail').addEventListener('click',function (){
    do_work(this);
});

document.querySelector('.address').addEventListener('click',function (){
    do_work(this);
});

