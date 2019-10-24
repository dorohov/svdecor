(function($) {
    "use strict"
    $(function() {

        var height = $(window).scrollTop()

        function show() {
            $('.to-top').addClass('is--show')
        }

        function hide() {
            $('.to-top').removeClass('is--show')
        }

        $(document).scroll(function() {
            height = $(window).scrollTop()

            if(height > 1000) show()
            else if(height < 1000) hide()
        })

        $('.to-top').on('click', function() {
            $('html,body').animate({scrollTop: 0},'slow');
        })

    })
})(jQuery);