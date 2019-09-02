(function($) {
    "use strict"
    $(function() {

        function openSearchPanel() {
            $('.navbar').addClass('is--search')
        }

        function closeSearchPanel() {
            $('.navbar').removeClass('is--search')
        }

        function openMobileMenu() {
            $('.navbar__mobile button').addClass('is-active')
        }

        function closeMobileMenu() {
            $('.navbar__mobile button').removeClass('is-active')
        }

        function toggleNavbar() {
            if($('.navbar__mobile button').hasClass('is-active')) {
                closeMobileMenu()
            }else {
                openMobileMenu()
            }
        }

        $('#openSearch').on('click', function() {
            openSearchPanel()
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar')
            if(targets.length <= 0) closeSearchPanel()
        })

        $('.navbar__mobile button').on('click', function() {
            toggleNavbar()
        })
        
    })
})(jQuery);