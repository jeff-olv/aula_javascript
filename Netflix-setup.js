$('.owl-carousel').owlCarousel({
    loop:true,  //Efeito de looping
    margin:1,  //Margem de um item para o outro
    nav:false,  //Setas de navegação
    responsive:{
        0:{     //Quando a tela tiver 0px até 599px exibirá um único item
            items:1
        },
        600:{   //Quando a tela tiver 600px até 999px exibirá 3 itens
            items:3
        },
        1000:{  //Quando a tela tiver acima de 1000px exibirá 6 itens
            items:6
        }
    }
})