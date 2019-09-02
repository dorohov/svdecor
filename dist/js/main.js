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

        svg4everybody()
        
    })
})(jQuery);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yX3N5c3RlbS5qcyIsIm1haW4uanMiLCJuYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJzZXRDb2xvcigpXHJcbnNob3dDb2xvck1lc3NhZ2UoKVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XHJcblxyXG4gICAgdmFyIGN1cnJlbnRDb2xvciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci1zY2hlbWUnKTtcclxuXHJcbiAgICBpZihjdXJyZW50Q29sb3IgPT0gJ3doaXRlJykgc2V0Q29sb3IoJ2RhcmsnKVxyXG4gICAgZWxzZSBpZihjdXJyZW50Q29sb3IgPT0gJ2RhcmsnKSBzZXRDb2xvcignd2hpdGUnKVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29sb3IoY29sb3JNb2RlKSB7XHJcblxyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29sb3Itc2NoZW1lJyk7XHJcbiAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXtcclxuICAgICAgICBlbGVtZW50c1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGhlbWUgPSBjb2xvck1vZGUgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXNjaGVtZScpO1xyXG5cclxuICAgIGlmKCF0aGVtZSB8fCAodGhlbWUgIT0gJ3doaXRlJyAmJiB0aGVtZSAhPSAnZGFyaycpKSB0aGVtZSA9ICdkYXJrJztcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3Itc2NoZW1lJywgdGhlbWUpO1xyXG5cclxuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXHJcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuICAgIGxpbmsuaWQgPSB0aGVtZTtcclxuICAgIGxpbmsuY2xhc3NOYW1lID0gJ2NvbG9yLXNjaGVtZSc7XHJcblxyXG4gICAgaWYodGhlbWUgPT0gJ3doaXRlJykgbGluay5ocmVmID0gc3R5bGVzLndoaXRlO1xyXG4gICAgZWxzZSBpZiAodGhlbWUgPT0gJ2RhcmsnKSBsaW5rLmhyZWYgPSBzdHlsZXMuZGFyaztcclxuXHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0NvbG9yTWVzc2FnZSgpIHtcclxuICAgIHZhciBzaG93SXQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3ItbWVzc2FnZScpXHJcblxyXG4gICAgaWYoIXNob3dJdCkge1xyXG4gICAgICAgIHZhciBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWVzc2FnZScpXHJcbiAgICAgICAgbXNnLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci1tZXNzYWdlJywgdHJ1ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VDb2xvck1lc3NhZ2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItbWVzc2FnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0iLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHN2ZzRldmVyeWJvZHkoKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI29wZW5TZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3BlblNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcicpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
