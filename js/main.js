'use strict'

const Rabit = '.rabbit';
const Tank  = '.tank';
const Gorilla = '.gorilla';
const Diamond = '.diamond';
const Sparkling = '.sparkling';
const Hazard = '.hazard';

let num = 0;


$(function() {
    
    $(Rabit).change(function(){
        if ($(this).prop('checked')) {
            $('#rabbit').get(0).play();
            $('.rabbit-bottle').show();
        }
        else {
            $('.rabbit-bottle').hide();
        }
    });

    $(Tank).change(function() {
        if ($(this).prop('checked')) {
            $('#tank').get(0).play();
            $('.tank-bottle').show();
        }
        else {
            $('.tank-bottle').hide();
        }
    });

    $(Gorilla).change(function(){
        if ($(this).prop('checked')) {
            $('#gorilla').get(0).play();
            $('.gorilla-bottle').show();
        }
        else {
            $('.gorilla-bottle').hide();
        }
    });

    $(Diamond).change(function(){
        if ($(this).prop('checked')) {
            $('#diamond').get(0).play();
            $('.diamond-bottle').show();
        }
        else {
            $('.diamond-bottle').hide();
        }
    });

    $(Sparkling).change(function(){
        if ($(this).prop('checked')) {
            $('#sparkling').get(0).play();
            $('.sparkling-bottle').show();
        }
        else {
            $('.sparkling-bottle').hide();
        }
    });

    $(Hazard).change(function(){
        if ($(this).prop('checked')) {
            $('#hazard').get(0).play();
            $('.hazard-trigger').show();
        }
        else {
            $('.hazard-trigger').hide();
        }
    });




    $(document).change(function() {
        setTimeout(function(){
            if ($("input[name*='rabbit']:checked").prop('checked'),'+',$("input[name*='tank']:checked").prop('checked')) {
                $('#bestmatch').get(0).play() ;
            }
            if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
                $('#bestmatch').get(0).pause() ;
            }
        },3000);
    });

    $(document).change(function() {
        setTimeout(function(){
            if ($("input[name*='gorilla']:checked").prop('checked') && $("input[name*='diamond']:checked").prop('checked')) {
                $('#bestmatch').get(0).play() ;
            }
        },3000);
    });

    $(document).change(function() {
        setTimeout(function(){
            if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
                $('#superbestmatch').get(0).play() ;
            }
        },3000);
    });

    $('.change').click(function() {
        $(this).data("click", ++num);
        var click = $(this).data("click");
        if(($("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked'))) {
            $('#rabitan_change').get(0).play();
            setTimeout(function(){
                $('.human.--isNomal').show();
            },10000);
        }
        if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
            $('#rabitan_change').get(0).pause() ;
            setTimeout(function(){
                $('.human.--isNomal').hide();
            },10000);
        }
        else {
            $('.human.--isNomal').hide();
        }
    });

    $('.change').click(function() {
        if(($("input[name*='gorilla']:checked").prop('checked') && $("input[name*='diamond']:checked").prop('checked'))) {
                $('#gorillamond_change').get(0).play();
                setTimeout(function(){
                    $('.human.--isGorimon').show();
                },12000);
        }
        else {
            $('.human.--isGorimon').hide();
        }
    });

    $('.change').click(function() {
        if(($("input[name*='sparkling']:checked").prop('checked'))) {
                $('#sparkling_change').get(0).play();
                setTimeout(function(){
                    $('.human.--isSparkling').show();
                },12000);
        }
        else {
            $('.human.--isSparkling').hide();
        }
    });

    $('.change').click(function() {
        if($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked'))  {
                $('#rabbittank_hazard_change').get(0).play();
                setTimeout(function(){
                    $('.human.--isHazard').show();
                },10000);
        }
        else {
            $('.human.--isHazard').hide();
        }
    });


});