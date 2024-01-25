document.getElementById('body') .onscroll = () => {
    if(scrollY >= 675){
        document.querySelector('.sub-buffer') .style = 'width: 90%';
    } else {
        document.querySelector('.sub-buffer') .style = 'width: 0%'
    }
    if(scrollY >= 325){
        document.querySelector('.about') .style = 'transform: scale(1.0);'
    }

    if(scrollY >= 1800){
        document.querySelector('.sub-buffer-two') .style = 'width: 90%';
    } else {
        document.querySelector('.sub-buffer-two') .style = 'width: 0%'
    }

    if (scrollY >= 1060){
        document.getElementById('cardOne') .style = 'right: 0%'
    }
    if (scrollY >= 1060){
        document.getElementById('cardTwo') .style = 'right: 0%'
    }
    if (scrollY >= 1060){
        document.getElementById('cardThree') .style = 'right: 0%'
    }
    if (scrollY >= 1060){
        document.getElementById('cardFour') .style = 'right: 0%'
    }
}
