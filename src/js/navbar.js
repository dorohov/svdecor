(function($) {
    "use strict"
    $(function() {

        // 
        // $('body').addClass('is--drop')
        // 

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
            $('.navbar').addClass('is--menu-open')
            $('body').css({
                overflow: 'hidden'
            })
        }

        function closeMobileMenu() {
            $('.navbar__mobile button').removeClass('is-active')
            $('.navbar__aside').removeClass('is--open')
            $('.navbar').removeClass('is--menu-open')
            $('body').css({
                overflow: 'auto'
            })
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

        function setPTDrop() {
            $('.navbar__drop').css({
                paddingTop: $('.navbar').innerHeight()
            })
        }
        
        var isScroll

        function openDrop() { 
            $('body').addClass('is--drop')

            isScroll = $('.navbar.is--scroll')

            $('.navbar').removeClass('is--scroll')
            setTimeout(function() {
                setPTDrop()
            }, 100)
        }

        function closeDrop() {
            $('body').removeClass('is--drop')

            if(isScroll.length > 0) $('.navbar').addClass('is--scroll')
        }

        function toggleDrop() {
            if($('body').hasClass('is--drop')) {
                closeDrop()
            }else {
                openDrop()
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

        $('.is--open-drop').on('click', function(e) {
            e.preventDefault()  
            toggleDrop()
        })

        setPTDrop()

        $(window).resize(function() {
            setPTDrop()
        })
        
    })
})(jQuery);