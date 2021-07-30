window.FontAwesomeConfig = {
    searchPseudoElements: true
}

$(document).ready(function(){
    $('#dis-img-example').attr('src','assets/img/produk/male_color/1.png');
    $.ajax({
        url:'landing/getPaletWarna',
        type:'GET',
        dataType:'JSON',
        success:function(data){
            $.each(data, function(k,v){
                $('.dots-list').append("<a href='#' class='listdot' id='"+v.id_palet+"'><li class='list-inline-item dot'></li></a>")
                
            })
            $('.dot').each(function(i){
                $(this).css({'background':'#'+data[i].hex, 'border':'1px solid #000'})
                if(i == 0){
                    $(this).addClass('active-palet').css('border','none');
                }
            })
        }
    })
    var trigger_gender = 0;

    $(this).on('click','.listdot',function(){
        id_palet = $(this).attr('id');
        if(trigger_gender == 0){
            $('#dis-img-example').attr('src','assets/img/produk/male_color/'+ id_palet +'.png');
        }else{
            $('#dis-img-example').attr('src','assets/img/produk/female_color/'+id_palet+'.png');
        }
        $('.dot').removeClass('active-palet').css('border','1px solid #000');
        $(this).find('li').addClass('active-palet').css('border','none');
    })

    $(this).on('click','#btnbackdesc',function(){
        $('#card-desc').animate( { scrollLeft: '+=260' }, 800);
    });

    $('.checkbox').change(function() {
        if($(this).is(":checked")) {
            trigger_gender = 1
            $('.dot').removeClass('active-palet').css('border','1px solid #000');
            $('#dis-img-example').attr('src','assets/img/produk/female_color/1.png');
            gsap.from('#dis-img-example', { opacity: 0, duration: 1, x: -70, ease: "power1.in" },$('.display-example').css('z-index',-1));
            $('.dot').each(function(i){
                if(i == 0){
                    $(this).addClass('active-palet').css('border','none');
                }
            });
        }else{
            trigger_gender = 0
            $('.dot').removeClass('active-palet').css('border','1px solid #000');
            $('#dis-img-example').attr('src','assets/img/produk/male_color/1.png');
            gsap.from('#dis-img-example', { opacity: 0, duration: 1, x: -70, ease: "power1.in" },$('.display-example').css('z-index',-1));
            $('.dot').each(function(i){
                if(i == 0){
                    $(this).addClass('active-palet').css('border','none');
                }
            });
        }  
    });
    gsap.from('.boxdeksripsi', { opacity: 0, duration: 1, x: 70, ease: "power2.in" })
    gsap.from('.setoblong_bottom', { opacity: 0, duration: 1, y: 60, ease: "power2.in"})
    gsap.from('#dis-img-example', { opacity: 0, duration: 1, x: -70, ease: "power1.in" },$('.display-example').css('z-index',-1))
    gsap.from('.setTop', { opacity: 0, duration: 1, y: -60, ease: "power1.in" })
    gsap.from('.boxwarna', { opacity: 0, duration: 1, x: 60, ease: "power2.in" })

    AOS.init({once: true});

    $('.owl-carousel').owlCarousel({
            margin: 20,
            autoHeight : true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                600:{
                    items:3,
                    nav:true
                },
                1000:{
                    items:3
                }
            }
            });
        });


// GASP

