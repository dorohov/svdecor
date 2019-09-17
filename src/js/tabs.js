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