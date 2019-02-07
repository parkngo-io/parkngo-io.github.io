/* ===================================================================
 * Wordsmith - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";

    var cfg = {
        mailChimpURL: 'https://github.us7.list-manage.com/subscribe/post?u=a3fb67213f8b0aa2ccaf64e3b&amp;id=067be924fe'
    },

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

        clAjaxChimp();

    })();

})(jQuery);