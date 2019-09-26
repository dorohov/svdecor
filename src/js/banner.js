(function($) {
    "use strict"
    $(function() {
        
        if($('.banner').length > 0) {
            var listItem = '<li data-id="%id"><a class="banner__footer__list__block"><div class="banner__footer__list__block__title is--typer_fb--on">%title</div><div class="banner__footer__list__block__price is--typer_fb--tw">%price ₽</div></a></li>';
            var listTotal = $('.banner__content__list__item');
            var currentSlider = 1
            var isSlide = true

            for(var i = 0; i < listTotal.length; i++) {
                $(listTotal[i]).removeClass('is--active')

                var thisPrice = $(listTotal[i]).data('price')
                var thisTitle = $(listTotal[i]).data('name')
                var thisId = $(listTotal[i]).data('id')

                var finalListItem = listItem.replace('%title', thisTitle)
                    finalListItem = finalListItem.replace('%price', thisPrice)
                    finalListItem = finalListItem.replace('%id', thisId)


                $('.banner__footer__list ul').append(finalListItem)
            }

            $(listTotal[currentSlider - 1]).addClass('is--active');

            function setSlide(id) {
                if(isSlide) {
                    isSlide = false
                    currentSlider = id

                    $('.banner__content__list__item').removeClass('is--active');
                    $('.banner__content__list__item:not([data-id="' + id + '"])').addClass('is--clos');
                    $('.banner__content__list__item[data-id="' + id + '"]').addClass('is--active')

                    $('.banner__footer__list li').removeClass('is--active')
                    $('.banner__footer__list li[data-id="' + currentSlider + '"]').addClass('is--active is--clos animated fadeInRight')
                    $('.banner__footer__list li[data-id="' + (currentSlider + 1) + '"]').addClass('is--active is--clos animated fadeInRight')
                    

                    if(currentSlider >= $('.banner__content__list__item').length) {
                        $('.banner__footer__list li[data-id="' + 1 + '"]').addClass('is--active animated fadeInRight')
                    }

                    setTimeout(function() {
                        $('.banner__content__list__item').removeClass('is--clos')
                        $('.banner__footer__list li').removeClass('is--clos animated fadeInRight')
                        setTimeout(function() {
                            isSlide = true
                        }, 600)
                    }, 1500)
                }
            }

            setSlide(1)

            var carouselTimer = setInterval(function() {
                
                setSlide(currentSlider)
                currentSlider++;

                if(currentSlider > $('.banner__content__list__item').length) currentSlider = 1

            }, 4000)

            $('.banner__footer__next__block__inner').on('click', function() {
                
                setSlide(currentSlider)
                currentSlider++;

                if(currentSlider > $('.banner__content__list__item').length) currentSlider = 1

            })
        }

    })
})(jQuery);