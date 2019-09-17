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

        var _classes = {
            open: "is--open"
        }

        function openDropdown(container) {
            $(container).addClass('is--open')
        }

        function closeDropdown() {
            $('.dropdown').removeClass(_classes.open)
        }

        function toggleDropdown(container) {
            if($(container).hasClass(_classes.open)) {
                closeDropdown()
            }else {
                openDropdown(container)
            }
        }
        
        $('.dropdown__title').on('click', function() {
            var thisContainer = $(this).parent('.dropdown')
            toggleDropdown(thisContainer)
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.dropdown')
            if(targets.length <= 0) closeDropdown()
        })
        
    })
})(jQuery);
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

        setNavbarDefaultMode($(document).scrollTop())

        function setNavbarDefaultMode(height) {
            if(height > 10) {
                $('.navbar').addClass('is--scroll')
            }else {
                $('.navbar').removeClass('is--scroll')
            }
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

        $(document).scroll(function() {
            setNavbarDefaultMode($(document).scrollTop())
        })
        
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        function closeTabs() {
            $('.tab-item').removeClass('is--active')
            $('.tabs-menu ul li').removeClass('is--active')
        }

        function openTab(id, name) {

            closeTabs()

            $('.tabs-container[data-tabname="' + name + '"] .tab-item[data-tabid="' + id + '"]').addClass('is--active')
            $('.tabs-menu ul[data-tabname="' + name + '"] li[data-tabid="' + id + '"]').addClass('is--active')

        }

        $('.tabs-menu ul li').on('click', function() {
            var name = $(this).parent('ul').data('tabname')
            var thisId = $(this).data('tabid')

            openTab(thisId, name)

        })
        
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNvbG9yX3N5c3RlbS5qcyIsImRyb3Bkb3duLmpzIiwibWFpbi5qcyIsIm5hdmJhci5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxpc3RJdGVtID0gJzxsaSBkYXRhLWlkPVwiJWlkXCI+PGEgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tcIj48ZGl2IGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrX190aXRsZVwiPiV0aXRsZTwvZGl2PjxkaXYgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tfX3ByaWNlXCI+JXByaWNlIOKCvTwvZGl2PjwvYT48L2xpPic7XHJcbiAgICAgICAgdmFyIGxpc3RUb3RhbCA9ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKTtcclxuICAgICAgICB2YXIgY3VycmVudFNsaWRlciA9IDFcclxuICAgICAgICB2YXIgaXNTbGlkZSA9IHRydWVcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3RUb3RhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKGxpc3RUb3RhbFtpXSkucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgdmFyIHRoaXNQcmljZSA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCdwcmljZScpXHJcbiAgICAgICAgICAgIHZhciB0aGlzVGl0bGUgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgnbmFtZScpXHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgnaWQnKVxyXG5cclxuICAgICAgICAgICAgdmFyIGZpbmFsTGlzdEl0ZW0gPSBsaXN0SXRlbS5yZXBsYWNlKCcldGl0bGUnLCB0aGlzVGl0bGUpXHJcbiAgICAgICAgICAgICAgICBmaW5hbExpc3RJdGVtID0gZmluYWxMaXN0SXRlbS5yZXBsYWNlKCclcHJpY2UnLCB0aGlzUHJpY2UpXHJcbiAgICAgICAgICAgICAgICBmaW5hbExpc3RJdGVtID0gZmluYWxMaXN0SXRlbS5yZXBsYWNlKCclaWQnLCB0aGlzSWQpXHJcblxyXG5cclxuICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IHVsJykuYXBwZW5kKGZpbmFsTGlzdEl0ZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGxpc3RUb3RhbFtjdXJyZW50U2xpZGVyIC0gMV0pLmFkZENsYXNzKCdpcy0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFNsaWRlKGlkKSB7XHJcbiAgICAgICAgICAgIGlmKGlzU2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGlzU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlciA9IGlkXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHQtdC50YfQsNGBINCw0LrRgtC40LLQtdC9INGB0LvQsNC50LQgJywgY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbTpub3QoW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdKScpLmFkZENsYXNzKCdpcy0tY2xvcycpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyBjdXJyZW50U2xpZGVyICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIChjdXJyZW50U2xpZGVyICsgMSkgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID49ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyAxICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5yZW1vdmVDbGFzcygnaXMtLWNsb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfSwgMTYwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2xpZGUoMSlcclxuXHJcbiAgICAgICAgdmFyIGNhcm91c2VsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZXIpXHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIrKztcclxuXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPiAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICB9LCA0MDAwKVxyXG5cclxuICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX25leHRfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlcisrO1xyXG5cclxuICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlciA+ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIGN1cnJlbnRTbGlkZXIgPSAxXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJzZXRDb2xvcigpXHJcbnNob3dDb2xvck1lc3NhZ2UoKVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRDb2xvciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci1zY2hlbWUnKTtcclxuXHJcbiAgICBpZihjdXJyZW50Q29sb3IgPT0gJ3doaXRlJykgc2V0Q29sb3IoJ2RhcmsnKVxyXG4gICAgZWxzZSBpZihjdXJyZW50Q29sb3IgPT0gJ2RhcmsnKSBzZXRDb2xvcignd2hpdGUnKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29sb3IoY29sb3JNb2RlKSB7XHJcblxyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sb3Itc2NoZW1lJyk7XHJcbiAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXtcclxuICAgICAgICBlbGVtZW50c1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGhlbWUgPSBjb2xvck1vZGUgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZScpO1xyXG5cclxuICAgIGlmKCF0aGVtZSB8fCAodGhlbWUgIT0gJ3doaXRlJyAmJiB0aGVtZSAhPSAnZGFyaycpKSB0aGVtZSA9ICdkYXJrJztcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3Itc2NoZW1lJywgdGhlbWUpO1xyXG5cclxuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXHJcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgIGxpbmsuaWQgPSB0aGVtZTtcclxuICAgIGxpbmsuY2xhc3NOYW1lID0gJ2NvbG9yLXNjaGVtZSc7XHJcblxyXG4gICAgaWYodGhlbWUgPT0gJ3doaXRlJykgbGluay5ocmVmID0gc3R5bGVzLndoaXRlO1xyXG4gICAgZWxzZSBpZiAodGhlbWUgPT0gJ2RhcmsnKSBsaW5rLmhyZWYgPSBzdHlsZXMuZGFyaztcclxuXHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0NvbG9yTWVzc2FnZSgpIHtcclxuICAgIHZhciBzaG93SXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3ItbWVzc2FnZScpXHJcblxyXG4gICAgaWYoIXNob3dJdCkge1xyXG4gICAgICAgIHZhciBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWVzc2FnZScpXHJcbiAgICAgICAgbXNnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci1tZXNzYWdlJywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VDb2xvck1lc3NhZ2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWVzc2FnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgb3BlbjogXCJpcy0tb3BlblwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRHJvcGRvd24oY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICQoY29udGFpbmVyKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcclxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoX2NsYXNzZXMub3BlbilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3Bkb3duKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZigkKGNvbnRhaW5lcikuaGFzQ2xhc3MoX2NsYXNzZXMub3BlbikpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRHJvcGRvd24oY29udGFpbmVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5kcm9wZG93bl9fdGl0bGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNDb250YWluZXIgPSAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJylcclxuICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd24odGhpc0NvbnRhaW5lcilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgY2xvc2VEcm9wZG93bigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBhZGRpbmdzKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogJy5pcy0tYy1wbCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcuaXMtLWMtcHInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0MTAwUGVyOiAnLmlzLS1oMTAwJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmJhcl9faW5uZXInKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkgKyAkKCcuZm9vdGVyJykuaW5uZXJIZWlnaHQoKVxyXG5cclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdMZWZ0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nUmlnaHQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHBhZGRpbmcubGVmdCArIDMwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5oZWlnaHQxMDBQZXIpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZGRpbmdzKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gJCh0aGlzKVxyXG4gICAgICAgICAgICB2YXIgYWlkID0gX3RoaXMuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGlmKCFhaWQpIHtcclxuICAgICAgICAgICAgICAgIGFpZCA9IF90aGlzLmRhdGEoJ3RhcmdldCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkKGFpZCkub2Zmc2V0KCkudG9wIC0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCl9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX2FzaWRlIC5pcy0tbWwnKTtcclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZV9fYnRuc19fc2VhcmNoJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlX19idG5zX19zZWFyY2gnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2hvd0l0ZW1zTWVudSgpIHtcclxuICAgICAgICAgICAgaXNNb3ZlZCA9ICFpc01vdmVkO1xyXG5cclxuICAgICAgICAgICAgZm9yICggdmFyIGk9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgICAgICAgIHZhciB0b2dnbGVJdGVtTW92ZSA9IGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICk7XHJcbiAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gaXNNb3ZlZCA/ICggMCArIGkpIDogaTtcclxuICAgICAgICAgICAgICBkZWxheSAqPSAxNTA7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCggdG9nZ2xlSXRlbU1vdmUsIGRlbGF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tbW92ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZScpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGVTaG93SXRlbXNNZW51KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXROYXZiYXJEZWZhdWx0TW9kZShoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNvcGVuU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5TZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVTZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXInKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fYXNpZGVfX2J0bnMnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZU1vYmlsZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXROYXZiYXJEZWZhdWx0TW9kZSgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlVGFicygpIHtcclxuICAgICAgICAgICAgJCgnLnRhYi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcudGFicy1tZW51IHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhYihpZCwgbmFtZSkge1xyXG5cclxuICAgICAgICAgICAgY2xvc2VUYWJzKClcclxuXHJcbiAgICAgICAgICAgICQoJy50YWJzLWNvbnRhaW5lcltkYXRhLXRhYm5hbWU9XCInICsgbmFtZSArICdcIl0gLnRhYi1pdGVtW2RhdGEtdGFiaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcudGFicy1tZW51IHVsW2RhdGEtdGFibmFtZT1cIicgKyBuYW1lICsgJ1wiXSBsaVtkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcudGFicy1tZW51IHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5wYXJlbnQoJ3VsJykuZGF0YSgndGFibmFtZScpXHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ3RhYmlkJylcclxuXHJcbiAgICAgICAgICAgIG9wZW5UYWIodGhpc0lkLCBuYW1lKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
