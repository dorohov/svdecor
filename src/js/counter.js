(function($) {
    "use strict"
    $(function() {

        var params = {
            min: 1,
            max: 9999
        }
        
        function plus(container, field) {
            var thisValue = parseInt($(field).val())

            if(thisValue < params.max) {
                $(field).val(thisValue + 1)
            }

        }
        
        function minus(container, field) {
            var thisValue = parseInt($(field).val())

            if(thisValue > params.min) {
                $(field).val(thisValue - 1)
            }
        }

        $('.counter button').on('click', function() {

            var thisContainer = $(this).parent('.counter')
            var thisField = $(this).siblings('input[type="number"]')

            if($(this).data('action') == 'minus') minus(thisContainer, thisField)
            else if($(this).data('action') == 'plus') plus(thisContainer, thisField)

        })
        

    })
})(jQuery);