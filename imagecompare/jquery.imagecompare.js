/*
 * ==================================================
 *
 * jqueryImageCompare v.1
 *
 * Apache License 2.0
 *
 * Copyright 2022 dima@karasev.pro
 *
 * <ul class="jqueryImageCompare" data-ratio="5x3">
 *     <li data-image="/path/to/image1.jpg"></li>
 *     <li data-image="/path/to/image2.jpg"></li>
 *     ...
 *     <li data-image="/path/to/imagen.jpg"></li>
 * </ul>
 *
 * ==================================================
 */

;
(function ($) {
    "use strict";

    $.fn.imagecompare = function(options){

        var defaults = {
            ratio:"3x1"
        };

        var settings = $.extend({},defaults,options);

        this.each(function(){
            settings = $.extend(settings,$(this).data());
            var ratio = settings.ratio.split("x");
            var pt = ( 100 / parseInt(ratio[0]) ) * parseInt(ratio[1]);

            $(this)
                .addClass("jqueryImageCompare")
                .css({
                    "padding-top":pt+"%",
                    "--count":$(this).find(">li").length,
                    "--width":$(this).width()+"px"
                })
                .find(">li")
                .each(function(index){
                    $(this)
                        .css({
                            "--index":(index+1),
                            "background-image":"url("+$(this).data("image")+")"
                        });
                });
        });

    };

})(jQuery);

$(document).ready(function(){
    $(".jqueryImageCompare").imagecompare();
    $(window).on("resize",function(){
        setTimeout(function(){
            $(".jqueryImageCompare").each(function(index){
                $(this)
                    .css({
                        "--width":$(this).width()+"px"
                    });
            });
        },1);
    });
});