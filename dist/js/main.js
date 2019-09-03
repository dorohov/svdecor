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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvbG9yX3N5c3RlbS5qcyIsIm1haW4uanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSAnPGxpPjxhIGRhdGEtaWQ9XCIlaWRcIiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja1wiPjxkaXYgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tfX3RpdGxlXCI+JXRpdGxlPC9kaXY+PGRpdiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja19fcHJpY2VcIj4lcHJpY2Ug4oK9PC9kaXY+PC9hPjwvbGk+JztcclxuICAgICAgICB2YXIgbGlzdFRvdGFsID0gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpO1xyXG4gICAgICAgIHZhciBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdFRvdGFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQobGlzdFRvdGFsW2ldKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc1ByaWNlID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ3ByaWNlJylcclxuICAgICAgICAgICAgdmFyIHRoaXNUaXRsZSA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCduYW1lJylcclxuICAgICAgICAgICAgdmFyIHRoaXNJZCA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCdpZCcpXHJcblxyXG4gICAgICAgICAgICB2YXIgZmluYWxMaXN0SXRlbSA9IGxpc3RJdGVtLnJlcGxhY2UoJyV0aXRsZScsIHRoaXNUaXRsZSlcclxuICAgICAgICAgICAgICAgIGZpbmFsTGlzdEl0ZW0gPSBmaW5hbExpc3RJdGVtLnJlcGxhY2UoJyVwcmljZScsIHRoaXNQcmljZSlcclxuICAgICAgICAgICAgICAgIGZpbmFsTGlzdEl0ZW0gPSBmaW5hbExpc3RJdGVtLnJlcGxhY2UoJyVpZCcsIHRoaXNJZClcclxuXHJcblxyXG4gICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgdWwnKS5hcHBlbmQoZmluYWxMaXN0SXRlbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQobGlzdFRvdGFsW2N1cnJlbnRTbGlkZXIgLSAxXSkuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2xpZGUoaWQpIHtcclxuICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW06bm90KFtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXSknKS5hZGRDbGFzcygnaXMtLWNsb3MnKTtcclxuICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zJylcclxuICAgICAgICAgICAgfSwgMTQwMClcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJylcclxuICAgICAgICAgICAgc2V0U2xpZGUodGhpc0lkKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB2YXIgY2Fyb3VzZWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNkamFzJylcclxuICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Iiwic2V0Q29sb3IoKVxyXG5zaG93Q29sb3JNZXNzYWdlKClcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNvbG9yKCkge1xyXG5cclxuICAgIHZhciBjdXJyZW50Q29sb3IgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3Itc2NoZW1lJyk7XHJcblxyXG4gICAgaWYoY3VycmVudENvbG9yID09ICd3aGl0ZScpIHNldENvbG9yKCdkYXJrJylcclxuICAgIGVsc2UgaWYoY3VycmVudENvbG9yID09ICdkYXJrJykgc2V0Q29sb3IoJ3doaXRlJylcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbG9yKGNvbG9yTW9kZSkge1xyXG5cclxuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbG9yLXNjaGVtZScpO1xyXG4gICAgd2hpbGUoZWxlbWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRoZW1lID0gY29sb3JNb2RlIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci1zY2hlbWUnKTtcclxuXHJcbiAgICBpZighdGhlbWUgfHwgKHRoZW1lICE9ICd3aGl0ZScgJiYgdGhlbWUgIT0gJ2RhcmsnKSkgdGhlbWUgPSAnZGFyayc7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXNjaGVtZScsIHRoZW1lKTtcclxuXHJcbiAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XHJcbiAgICBsaW5rLmlkID0gdGhlbWU7XHJcbiAgICBsaW5rLmNsYXNzTmFtZSA9ICdjb2xvci1zY2hlbWUnO1xyXG5cclxuICAgIGlmKHRoZW1lID09ICd3aGl0ZScpIGxpbmsuaHJlZiA9IHN0eWxlcy53aGl0ZTtcclxuICAgIGVsc2UgaWYgKHRoZW1lID09ICdkYXJrJykgbGluay5ocmVmID0gc3R5bGVzLmRhcms7XHJcblxyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb2xvck1lc3NhZ2UoKSB7XHJcbiAgICB2YXIgc2hvd0l0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLW1lc3NhZ2UnKVxyXG5cclxuICAgIGlmKCFzaG93SXQpIHtcclxuICAgICAgICB2YXIgbXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1lc3NhZ2UnKVxyXG4gICAgICAgIG1zZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3ItbWVzc2FnZScsIHRydWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlQ29sb3JNZXNzYWdlKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yLW1lc3NhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyX19hc2lkZSAuaXMtLW1sJyk7XHJcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VTZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVTZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGVfX2J0bnNfX3NlYXJjaCcpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1vYmlsZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZV9fYnRuc19fc2VhcmNoJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVNob3dJdGVtc01lbnUoKSB7XHJcbiAgICAgICAgICAgIGlzTW92ZWQgPSAhaXNNb3ZlZDtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIHZhciBpPSBpdGVtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcclxuICAgICAgICAgICAgICB2YXIgdG9nZ2xlSXRlbU1vdmUgPSBnZXRUb2dnbGVJdGVtTW92ZSggaSApO1xyXG4gICAgICAgICAgICAgIHZhciBkZWxheSA9IGlzTW92ZWQgPyAoIDAgKyBpKSA6IGk7XHJcbiAgICAgICAgICAgICAgZGVsYXkgKj0gMTUwO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoIHRvZ2dsZUl0ZW1Nb3ZlLCBkZWxheSApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRUb2dnbGVJdGVtTW92ZSggaSApIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtLW1vdmVkJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZScpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGUnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBpZigkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZU1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9nZ2xlU2hvd0l0ZW1zTWVudSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjb3BlblNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvcGVuTW9iaWxlU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5Nb2JpbGVTZWFyY2hQYW5lbCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgY2xvc2VTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXJfX2FzaWRlX19idG5zJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgY2xvc2VNb2JpbGVTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==
