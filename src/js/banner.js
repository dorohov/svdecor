(function($) {
    "use strict"
    $(function() {
        
        var listItem = '<li><a data-id="%id" class="banner__footer__list__block"><div class="banner__footer__list__block__title">%title</div><div class="banner__footer__list__block__price">%price ₽</div></a></li>';
        var listTotal = $('.banner__content__list__item');
        var currentSlider = 1

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
            $('.banner__content__list__item').removeClass('is--active');
            $('.banner__content__list__item:not([data-id="' + id + '"])').addClass('is--clos');
            $('.banner__content__list__item[data-id="' + id + '"]').addClass('is--active')

            setTimeout(function() {
                $('.banner__content__list__item').removeClass('is--clos')
            }, 1400)

        }

        $('.banner__footer__list__block').on('click', function() {
            var thisId = $(this).data('id')
            setSlide(thisId);
        })

        var carouselTimer = setInterval(function() {
            console.log('asdjas')
        }, 1000)

    })
})(jQuery);