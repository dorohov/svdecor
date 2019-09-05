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
setColor()
showColorMessage()

function changeColor() {

    var currentColor = localStorage.getItem('color-scheme');

    if(currentColor == 'white') setColor('dark')
    else if(currentColor == 'dark') setColor('white')

}

function setColor(colorMode) {

    var elements = document.getElementsByClassName('color-scheme');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    var theme = colorMode || localStorage.getItem('color-scheme');

    if(!theme || (theme != 'white' && theme != 'dark')) theme = 'dark';

    localStorage.setItem('color-scheme', theme);

    var link = document.createElement('link')
    link.rel = 'stylesheet';
    link.id = theme;
    link.className = 'color-scheme';

    if(theme == 'white') link.href = styles.white;
    else if (theme == 'dark') link.href = styles.dark;

    document.head.append(link);
}

function showColorMessage() {
    var showIt = localStorage.getItem('color-message')

    if(!showIt) {
        var msg = document.getElementById('color-message')
        msg.style.display = 'block';
        localStorage.setItem('color-message', true)
    }
}

function closeColorMessage() {
    document.getElementById('color-message').style.display = 'none';
}
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
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })
        
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var isMoved = false;
        var items = document.querySelectorAll('.navbar__aside .is--ml');
        var isMoved = false;

        function openSearchPanel() {
            $('.navbar').addClass('is--search')
        }

        function closeSearchPanel() {
            $('.navbar').removeClass('is--search')
        }

        function openMobileSearchPanel() {
            $('.navbar__aside__btns__search').addClass('is--open')
        }

        function closeMobileSearchPanel() {
            $('.navbar__aside__btns__search').removeClass('is--open')
        }

        function toggleShowItemsMenu() {
            isMoved = !isMoved;

            for ( var i= items.length - 1; i >= 0; i-- ) {
              var toggleItemMove = getToggleItemMove( i );
              var delay = isMoved ? ( 0 + i) : i;
              delay *= 150;
              setTimeout( toggleItemMove, delay );
            }
        }

        function getToggleItemMove( i ) {
            var item = items[i];
            return function() {
              item.classList.toggle('is--moved');

            }
        }

        function openMobileMenu() {
            $('.navbar__mobile button').addClass('is-active')
            $('.navbar__aside').addClass('is--open')
        }

        function closeMobileMenu() {
            $('.navbar__mobile button').removeClass('is-active')
            $('.navbar__aside').removeClass('is--open')
        }

        function toggleNavbar() {
            if($('.navbar__mobile button').hasClass('is-active')) {
                closeMobileMenu()
            }else {
                openMobileMenu()
            }
            toggleShowItemsMenu()
        }

        $('#openSearch').on('click', function() {
            openSearchPanel()
        })

        $('#openMobileSearch').on('click', function() {
            openMobileSearchPanel();
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar')
            if(targets.length <= 0) closeSearchPanel()
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar__aside__btns')
            if(targets.length <= 0) closeMobileSearchPanel()
        })

        $('.navbar__mobile button').on('click', function() {
            toggleNavbar()
        })
        
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvbG9yX3N5c3RlbS5qcyIsIm1haW4uanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsaXN0SXRlbSA9ICc8bGkgZGF0YS1pZD1cIiVpZFwiPjxhIGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrXCI+PGRpdiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja19fdGl0bGVcIj4ldGl0bGU8L2Rpdj48ZGl2IGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrX19wcmljZVwiPiVwcmljZSDigr08L2Rpdj48L2E+PC9saT4nO1xyXG4gICAgICAgIHZhciBsaXN0VG90YWwgPSAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJyk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRTbGlkZXIgPSAxXHJcbiAgICAgICAgdmFyIGlzU2xpZGUgPSB0cnVlXHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0VG90YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChsaXN0VG90YWxbaV0pLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzUHJpY2UgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgncHJpY2UnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc1RpdGxlID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ25hbWUnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc0lkID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ2lkJylcclxuXHJcbiAgICAgICAgICAgIHZhciBmaW5hbExpc3RJdGVtID0gbGlzdEl0ZW0ucmVwbGFjZSgnJXRpdGxlJywgdGhpc1RpdGxlKVxyXG4gICAgICAgICAgICAgICAgZmluYWxMaXN0SXRlbSA9IGZpbmFsTGlzdEl0ZW0ucmVwbGFjZSgnJXByaWNlJywgdGhpc1ByaWNlKVxyXG4gICAgICAgICAgICAgICAgZmluYWxMaXN0SXRlbSA9IGZpbmFsTGlzdEl0ZW0ucmVwbGFjZSgnJWlkJywgdGhpc0lkKVxyXG5cclxuXHJcbiAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCB1bCcpLmFwcGVuZChmaW5hbExpc3RJdGVtKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChsaXN0VG90YWxbY3VycmVudFNsaWRlciAtIDFdKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRTbGlkZShpZCkge1xyXG4gICAgICAgICAgICBpZihpc1NsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBpc1NsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIgPSBpZFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9GB0LXQudGH0LDRgSDQsNC60YLQuNCy0LXQvSDRgdC70LDQudC0ICcsIGN1cnJlbnRTbGlkZXIpXHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW06bm90KFtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXSknKS5hZGRDbGFzcygnaXMtLWNsb3MnKTtcclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW1bZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgY3VycmVudFNsaWRlciArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyAoY3VycmVudFNsaWRlciArIDEpICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlciA+PSAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgMSArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zJylcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1NsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgICAgICAgIH0sIDE2MDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNsaWRlKDEpXHJcblxyXG4gICAgICAgIHZhciBjYXJvdXNlbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50U2xpZGVyKVxyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGVyKys7XHJcblxyXG4gICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID4gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLmxlbmd0aCkgY3VycmVudFNsaWRlciA9IDFcclxuXHJcbiAgICAgICAgfSwgNDAwMClcclxuXHJcbiAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19uZXh0X19ibG9ja19faW5uZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZXIpXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIrKztcclxuXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPiAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Iiwic2V0Q29sb3IoKVxyXG5zaG93Q29sb3JNZXNzYWdlKClcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50Q29sb3IgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3Itc2NoZW1lJyk7XHJcblxyXG4gICAgaWYoY3VycmVudENvbG9yID09ICd3aGl0ZScpIHNldENvbG9yKCdkYXJrJylcclxuICAgIGVsc2UgaWYoY3VycmVudENvbG9yID09ICdkYXJrJykgc2V0Q29sb3IoJ3doaXRlJylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbG9yKGNvbG9yTW9kZSkge1xyXG5cclxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yLXNjaGVtZScpO1xyXG4gICAgd2hpbGUoZWxlbWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRoZW1lID0gY29sb3JNb2RlIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci1zY2hlbWUnKTtcclxuXHJcbiAgICBpZighdGhlbWUgfHwgKHRoZW1lICE9ICd3aGl0ZScgJiYgdGhlbWUgIT0gJ2RhcmsnKSkgdGhlbWUgPSAnZGFyayc7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZScsIHRoZW1lKTtcclxuXHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICBsaW5rLmlkID0gdGhlbWU7XHJcbiAgICBsaW5rLmNsYXNzTmFtZSA9ICdjb2xvci1zY2hlbWUnO1xyXG5cclxuICAgIGlmKHRoZW1lID09ICd3aGl0ZScpIGxpbmsuaHJlZiA9IHN0eWxlcy53aGl0ZTtcclxuICAgIGVsc2UgaWYgKHRoZW1lID09ICdkYXJrJykgbGluay5ocmVmID0gc3R5bGVzLmRhcms7XHJcblxyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb2xvck1lc3NhZ2UoKSB7XHJcbiAgICB2YXIgc2hvd0l0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLW1lc3NhZ2UnKVxyXG5cclxuICAgIGlmKCFzaG93SXQpIHtcclxuICAgICAgICB2YXIgbXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1lc3NhZ2UnKVxyXG4gICAgICAgIG1zZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3ItbWVzc2FnZScsIHRydWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQ29sb3JNZXNzYWdlKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX2FzaWRlIC5pcy0tbWwnKTtcclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZV9fYnRuc19fc2VhcmNoJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlX19idG5zX19zZWFyY2gnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2hvd0l0ZW1zTWVudSgpIHtcclxuICAgICAgICAgICAgaXNNb3ZlZCA9ICFpc01vdmVkO1xyXG5cclxuICAgICAgICAgICAgZm9yICggdmFyIGk9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgICAgICAgIHZhciB0b2dnbGVJdGVtTW92ZSA9IGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICk7XHJcbiAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gaXNNb3ZlZCA/ICggMCArIGkpIDogaTtcclxuICAgICAgICAgICAgICBkZWxheSAqPSAxNTA7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCggdG9nZ2xlSXRlbU1vdmUsIGRlbGF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tbW92ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZScpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGVTaG93SXRlbXNNZW51KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNvcGVuU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5TZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVTZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXInKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fYXNpZGVfX2J0bnMnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZU1vYmlsZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
