const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');

const changeClass = (el) => {
    for(var i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn; //outputs what is being clicked in the console
    changeClass(e.target);
    for(var i = 0; i < contents.length; i++){
        contents[i].classList.remove('active');
        if (contents[i].dataset.content === currTab){
            contents[i].classList.add('active');
        }
    }
})

const subContent = document.querySelectorAll('.sub-content');
const subTab = document.getElementById('tabs-2');

const changeSubClass = (el) => {
    for(var i = 0; i < subTab.children.length; i++){
        subTab.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

subTab.addEventListener('click', e => {
    const currSubTab = e.target.dataset.btn2; //outputs what is being clicked in the console
    changeSubClass(e.target);
    for(var i = 0; i < subContent.length; i++){
        subContent[i].classList.remove('active');
        if (subContent[i].dataset.content2 === currSubTab){
            subContent[i].classList.add('active');
        }
    }
})
