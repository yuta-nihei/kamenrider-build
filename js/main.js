'use strict'

const Rabit = '.rabbit';
const Tank  = '.tank';
const Gorilla = '.gorilla';
const Diamond = '.diamond';
const Sparkling = '.sparkling';
const Hazard = '.hazard';

let num = 0;


$(function() {
    
    //ラビットボトル
    $(Rabit).change(function(){
        if ($(this).prop('checked')) {
            $('#rabbit').get(0).play();
            $('.rabbit-bottle').show();
        }
        else {
            $('.rabbit-bottle').hide();
        }
    });

    //タンクボトル
    $(Tank).change(function() {
        if ($(this).prop('checked')) {
            $('#tank').get(0).play();
            $('.tank-bottle').show();
        }
        else {
            $('.tank-bottle').hide();
        }
    });

    //ゴリラボトル
    $(Gorilla).change(function(){
        if ($(this).prop('checked')) {
            $('#gorilla').get(0).play();
            $('.gorilla-bottle').show();
        }
        else {
            $('.gorilla-bottle').hide();
        }
    });

    //ダイアモンドボトル
    $(Diamond).change(function(){
        if ($(this).prop('checked')) {
            $('#diamond').get(0).play();
            $('.diamond-bottle').show();
        }
        else {
            $('.diamond-bottle').hide();
        }
    });

    //スパークリングボトル
    $(Sparkling).change(function(){
        if ($(this).prop('checked')) {
            $('#sparkling').get(0).play();
            $('.sparkling-bottle').show();
        }
        else {
            $('.sparkling-bottle').hide();
        }
    });

    //ハザードトリガー
    $(Hazard).change(function(){
        if ($(this).prop('checked')) {
            $('#hazard').get(0).play();
            $('.hazard-trigger').show();
        }
        else {
            $('.hazard-trigger').hide();
        }
    });



    //ラビットタンク
    $(document).change(function() {
        setTimeout(function(){
            //もしラビットタンクにチェックが入ったら
            if ($("input[name*='rabbit']:checked").prop('checked'),'+',$("input[name*='tank']:checked").prop('checked')) {
                $('#bestmatch').get(0).play() ; //ベストマッチ音声
            }
            //もしハザードトリガー、ラビットタンクにチェックが入ったら
            if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
                $('#bestmatch').get(0).pause() ;
            }
        },3000);
    });

    //ゴリラダイアモンド
    $(document).change(function() {
        setTimeout(function(){
            //もしゴリラダイアモンドにチェックが入ったら
            if ($("input[name*='gorilla']:checked").prop('checked') && $("input[name*='diamond']:checked").prop('checked')) {
                $('#bestmatch').get(0).play() ;
            }
        },3000);
    });

    //ハザード ラビットタンク
    $(document).change(function() {
        setTimeout(function(){
            //もしハザードトリガーとラビットタンクにチェックが入ったら
            if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
                $('#superbestmatch').get(0).play() ;
            }
        },3000);
    });

    //レバークリック時
    $('.change').click(function() {
        $(this).data("click", ++num);
        var click = $(this).data("click");
        //ラビットタンクボトルをクリック済みのとき
        if(($("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked'))) {
            $('#rabitan_change').get(0).play(); //変身音声を鳴らす
            setTimeout(function(){
                $('.human.--isNomal').show(); //ラビットタンクフォームへ変更
            },10000);
        }
        //ハザード,ラビットタンクをクリック済みのとき
        if ($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked')) {
            $('#rabitan_change').get(0).pause() ;
            setTimeout(function(){
                $('.human.--isNomal').hide(); //ラビットタンクフォームへ変更
            },10000);
        }
        else {
            $('.human.--isNomal').hide(); //隠す
        }
    });


    $('.change').click(function() {
        if(($("input[name*='gorilla']:checked").prop('checked') && $("input[name*='diamond']:checked").prop('checked'))) {
                $('#gorillamond_change').get(0).play(); //変身音声を鳴らす
                setTimeout(function(){
                    $('.human.--isGorimon').show(); //ゴリラダイアモンドフォームへ変更
                },12000);
        }
        else {
            $('.human.--isGorimon').hide(); //隠す
        }
    });

    $('.change').click(function() {
        if(($("input[name*='sparkling']:checked").prop('checked'))) {
                $('#sparkling_change').get(0).play();　//変身音声を鳴らす
                setTimeout(function(){
                    $('.human.--isSparkling').show(); //スパークリングフォーム表示
                },12000);
        }
        else {
            $('.human.--isSparkling').hide(); //隠す
        }
    });

    $('.change').click(function() {
        if($("input[name*='hazard']:checked").prop('checked') && $("input[name*='rabbit']:checked").prop('checked') && $("input[name*='tank']:checked").prop('checked'))  {
                $('#rabbittank_hazard_change').get(0).play();　//変身音声を鳴らす
                setTimeout(function(){
                    $('.human.--isHazard').show(); //ハザードフォーム表示
                },10000);
        }
        else {
            $('.human.--isHazard').hide(); //隠す
        }
    });


});