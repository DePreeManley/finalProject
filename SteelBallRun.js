document.addEventListener('click', event =>{
    const header = event.target.closest('.BTTN')
    if (!header) return
    
    const openItem = document.querySelector('BTTN.active')
    
    if (openItem && openItem !==header) {
        openItem.classList.remove('active')
        openItem.nextElementSibling.computedStyleMap.maxHeight = null;
        openItem.querySelector('.icon').src = './res/images/plus.png'
    }
    
    header.classList.toggle('active')
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon')
    
    if (header.classList.contains('active')){
        content.style.maxHeight = content.scrollHeight + 'px'
        icon.src = './res/images/minus_PNG55.png'
    } else{
        content.style.maxHeight = null;
        icon.src = './res/images/plus.png'
    }
    })

