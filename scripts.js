let exit_btn = document.querySelectorAll('.exit');
let card_btn = document.querySelectorAll('.button');

exit_button(exit_btn);
modal_btn(card_btn);

































function exit_button(obj){
    //logic is i get exit button handler remove open class
    // from div.bar (that is the class telling me the modal is open)
    //then i get the grand parent div and remove expand class to remove modal
    // and add hidden attribute to the things inside again
    for(var i = 0; i< obj.length;i++){
        obj[i].addEventListener('click',function (e){
            e.stopPropagation();
            this.parentNode.classList.remove('open');
            let parent_div = this.parentNode.parentNode;
            parent_div.classList.remove('expand');
            let grand_parent = parent_div.parentNode;
            grand_parent.childNodes.forEach(node => {
                node.removeAttribute('hidden');               
            });
            this.setAttribute('hidden','hidden');
            parent_div.childNodes.forEach(node => {
                if(node.classList =='body')
                node.setAttribute('hidden','hidden');
            });
        });
    }
}
function modal_btn(obj){
    for(var i = 0; i < obj.length; i++){
        obj[i].addEventListener('click',function (e){
            // e.stopPropagation();
            open_modal(this);
        });
    };
}
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
function open_modal(obj) {
    hideOtherButtons(obj);
    obj.classList.add('expand');
    obj.childNodes.forEach(node => {
        if(node.classList == 'bar'){
            node.classList.add('open');
            node.lastElementChild.removeAttribute('hidden');
        };
        if(node.classList == 'body'){
            node.removeAttribute('hidden');
        }
    })
}

