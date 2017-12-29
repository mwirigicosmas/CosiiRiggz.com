$(function () {

    console.log('what the hell');

    smooth();

    workFunction();

    workLoad1();

    workLoad2();

    workLoad3();

    workLoad4();

    workLoad5();

    workLoad6();

    workLoad7();

    workLoad8();

    $("header h1 ").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });

});

function smooth(duration) {

    $('a[href^="#"]').on('click', function (event) {

        var target = $( $(this).attr('href'));

        if (target.length){

            event.preventDefault();

            $('html, body').animate({

                scrollTop: target.offset().top

            }, duration);
        }
    });
}

function workFunction() {

    $('.thumb-cover').click(function () {

        console.log('open');

        $('.work-belt').css('left','-100%');

        $('.work-container').show();

    });

    $('.work-return').click(function () {

        console.log('closed');

        $('.work-belt').css('left', '0%');

        $('.work-container').hide();

    });
}

function workLoad1() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-1').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-1.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad2() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-2').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-2.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad3() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-3').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-3.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad4() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-4').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-4.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad5() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-5').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-5.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad6() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-6').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-6.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad7() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-7').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-7.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

function workLoad8() {

    $.ajaxSetup({ cache: true});

    $('.thumb-unit-8').click(function () {

        var $this = $(this),
            newTitle = $this.find('strong').text(),
            spinner = '<div class="loader">Loading...</div>' ,
            newHtml='work/work-8.html' ;

        $('.project-load').html(spinner).load(newHtml);
        $('.project-title').text(newTitle);

    });

}

(function( $ ){

    $.fn.fitText = function( kompressor, options ) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize' : Number.NEGATIVE_INFINITY,
                'maxFontSize' : Number.POSITIVE_INFINITY
            }, options);

        return this.each(function(){

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function () {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})( jQuery );




