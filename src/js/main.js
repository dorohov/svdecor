(function($) {
    "use strict"
    $(function() {
        
        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $('main').css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - 100},'slow');
        })

        $('.item-carousel__items').slick({
            prevArrow: '.item-carousel__controls button.is--prev',
            nextArrow: '.item-carousel__controls button.is--next',
            swipe: false
        })

        $('.production-carousel__right__list').slick({
            prevArrow: '.production-carousel__left__arrows button.is--prev',
            nextArrow: '.production-carousel__left__arrows button.is--next',
            swipe: false
        })

        $('.production-carousel__right__list').on('afterChange', function() {
            setCarouselDatas()
        })

        function setCarouselDatas() {
            var _this = $('.production-carousel__right__list__item.slick-active'),
            _thisTitle = $(_this).data('title'),
            _thisDesc = $(_this).data('desc'),
            _thisLink = $(_this).data('link')

            $('.production-carousel__left__heading').html(_thisTitle)
            $('.production-carousel__left__desc').html(_thisDesc)
            $('.production-carousel__left__btn .btn').attr('href', _thisLink)
        }

        $('form').parsley()

        var phoneInputs = document.getElementsByClassName('input-phone');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }


        $('.is--file-form input[type="file"]').change(function() {
            var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
            $(this).parent().find('.is--label').html(filename)
       });
        
    })
})(jQuery);