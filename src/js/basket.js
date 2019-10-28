(function($) {
    "use strict"
    $(function() {

        $('.is--del-form').hide();

        $('#f_delivery').change(function(e) {
            $('.is--del-form').hide();
            $('#f_delivery-a').val('');
            
            var val = e.target.value
            
            if(val == 'd') {

            }else if(val == 's') {
                openModal('#modal_map')                
            }

            $('.is--del-form').show();

        })  

        var ourWidjet = new ISDEKWidjet ({
            defaultCity: 'Москва',
            cityFrom: 'Москва',
            country: 'Россия',
            link: 'modal-map__inner',
            path: 'https://www.cdek.ru/website/edostavka/template/scripts/',
            servicepath: 'http://frontend.dorohovdesign.ru/svdecor/service.php',
            hidedelt: true,
            onChoose: function(wat) {
                console.log('сработало')
                $('#f_delivery-a').val(wat.cityName + ', ' + wat.PVZ.Address);
                $.modal.close();
            }
        });

        $('.modal__picker__block__inner').on('click', function() {
            var thisColor = $(this).data('color')
            var thisColorName = $(this).data('colorname')

            $.modal.close();

            $('.item-basket__line__color span').removeAttr('class').addClass(thisColor)
            $('#ral-color').val(thisColorName)
        })

    })
})(jQuery);