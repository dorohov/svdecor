function openModal(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModal(thisModalId)
            return false;
        })

        $('.modal__picker__block__inner').on('click', function() {
            var color = $(this).data('color')
            console.log(color);
        })

        // openModal('#modal_form')


        // var pickr = Pickr.create({
        //     el: '.color_picker__inner',
        //     theme: 'nano',
        //     container: '.color_picker',
        
        //     swatches: null,
        
        //     components: {
        //         hue: true,
        //         preview: true,
        //         interaction: {
        //             input: true,
        //             save: true
        //         }
        //     },
        //     strings: {
        //         save: 'Выбрать',  // Default for save button
        //         clear: 'Очистить', // Default for clear button
        //         cancel: 'Отменить' // Default for cancel button
        //      }
        // });

        // pickr.on('change', function(color, instance) {
        //     $('.color_picker_prev span').css({
        //         backgroundColor: '#' + color.toHEXA()[0] + color.toHEXA()[1] + color.toHEXA()[2]
        //     })
        // })

    })
})(jQuery);