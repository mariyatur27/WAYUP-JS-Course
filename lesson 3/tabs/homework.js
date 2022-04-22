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
