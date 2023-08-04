const accordians = document.querySelectorAll('.accordian-section');

accordians.forEach(accordian =>{
    const icon = accordian.querySelector('.icon');
    const description = accordian.querySelector('.description');

    accordian.addEventListener('click',()=>{

        // icon.classList.toggle('active');
        // description.classList.toggle('active');

        accordian.classList.toggle('active');
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            description.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            description.style.maxHeight = description.scrollHeight + 'px';
        }
    })
})


