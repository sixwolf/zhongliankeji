/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    //¹Ì¶¨nav
    $('.header .nav').children('li').each(function () {
        $(this).children('ul').hide();
        $(this).on('mouseenter', function () {
            $(this).children('a').css({color: 'white'})
            $(this).css({backgroundColor: '#f75a53', opacity: 1}).children('ul').stop(true, true).slideDown(200);
        })
        $(this).on('mouseleave', function () {
            $(this).children('a').css({color: 'black'})
            $(this).css({backgroundColor: 'white', opacity: 1}).children('ul').slideUp();
        })
    })

     //foot部分
    $('.footer .name').on('blur', function () {
        var reg = /^[\u4e00-\u9fa5]{2,}$/
        var value = $(this).val();
        if (reg.test(value)) {
            $('.footer .name-juge').hide();
        }else{
            $('.footer .name-juge').show();
        }
    })
    //$('.footer .name').on('focus', function () {
    //    $('.footer .name-juge').hide();
    //})

    $('.footer .phone').on('blur', function () {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
        var value = $(this).val();
        if (reg.test(value)) {
            $('.footer .phone-juge').hide();
        }else{
            $('.footer .phone-juge').show();
        }
    })
    //$('.footer .phone').on('focus', function () {
    //    $('.footer .phone-juge').hide();
    //})

})