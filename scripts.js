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
                try{
                    node.removeAttribute('hidden');
                }catch(e){
                    return false;
                }               
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
        if(node.classList == undefined)
            return false;
        else if (node.classList[0] == obj.classList[0]){
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

var social_icons = document.querySelectorAll('social-icon');
// social_icons.forEach(icon =>{
//     icon.addEventListener('mouseover');
// })

// let window_width = window.innerWidth;
// console.log(window_width);
// window.addEventListener('resize',()=>{
//     console.log('resized');
    
//     // if()
//     console.log('425');
//     window_width = window.innerWidth;
//     console.log(window_width);
// })
// // if(window.onresize){
// //     console.log(window.innerWidth);
// //     console.log(window_width);
// // }
// var tmot = setTimeout(()=> {
//     if(window.innerWidth <= 425){  
//         hover_changes();      
//     };
//     // else if()
// },1500);
// function hover_changes(){
//     document.querySelector(".imgbox").style.cssText = "clip-path: circle(70px at 50% 25%);"
//     document.querySelector('.box').style.cssText = `
//         background-color: #343a40;
//         border-radius: 10px;
//         box-shadow: 0 14px 28px rgba(0,0,0,0.2), 0 10px 10px rgba(0, 0, 0, 0.2);    
//         transform: scale(1.2, 1.2);
//         transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);`;
//         document.querySelector('.header').style.cssText = `            
//         opacity: 1;
//         transition: opacity cubic-bezier(0.6, 0.04, 0.98, 0.335) .1s;
//         transition-delay: .3s;`;
//         document.querySelector('.education').style.cssText = `            
//         opacity: 1;
//         transition: opacity cubic-bezier(0.6, 0.04, 0.98, 0.335) .1s;
//         transition-delay: .4s;`;
//         document.querySelector('.title').style.cssText = `            
//         opacity: 1;
//         transition: opacity cubic-bezier(0.6, 0.04, 0.98, 0.335) .1s;
//         transition-delay: .5s;`;

// }

// window.matchMedia("(max-width:425px").matches