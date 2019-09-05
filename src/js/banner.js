(function($) {
    "use strict"
    $(function() {
        
        var listItem = '<li data-id="%id"><a class="banner__footer__list__block"><div class="banner__footer__list__block__title">%title</div><div class="banner__footer__list__block__price">%price ₽</div></a></li>';
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
                console.log('сейчас активен слайд ', currentSlider)
                $('.banner__content__list__item').removeClass('is--active');
                $('.banner__content__list__item:not([data-id="' + id + '"])').addClass('is--clos');
                $('.banner__content__list__item[data-id="' + id + '"]').addClass('is--active')

                $('.banner__footer__list li').removeClass('is--active')
                $('.banner__footer__list li[data-id="' + currentSlider + '"]').addClass('is--active')
                $('.banner__footer__list li[data-id="' + (currentSlider + 1) + '"]').addClass('is--active')
                
                if(currentSlider >= $('.banner__content__list__item').length) {
                    $('.banner__footer__list li[data-id="' + 1 + '"]').addClass('is--active')
                }

                setTimeout(function() {
                    $('.banner__content__list__item').removeClass('is--clos')
                    setTimeout(function() {
                        isSlide = true
                    }, 500)
                }, 1600)
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

    })
})(jQuery);