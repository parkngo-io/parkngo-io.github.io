/* ===================================================================
 * Wordsmith - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        //mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=5510cf0f6b'   // mailchimp url
        mailChimpURL: 'https://github.us7.list-manage.com/subscribe/post?u=a3fb67213f8b0aa2ccaf64e3b&amp;id=067be924fe'
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* AjaxChimp
    * ------------------------------------------------------ */
    var clAjaxChimp = function() {
        
        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translation
        //
        //  Defaults:
        //	 'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fas fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fas fa-exclamation-circle"></i> You must enter a valid e-mail address.',
            2: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            3: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            4: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            5: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.'
        } 

    };

   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {

        clPreloader();
        clAjaxChimp();

    })();

})(jQuery);