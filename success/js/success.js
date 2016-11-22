/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    ////³É¹¦°¸Àý
    $('.success-case .container li').each(function () {
        $(this).children('span').hide();
        $(this).on('mouseenter', function () {
            $(this).children('span').show(300);
        });
        $(this).on('mouseleave', function () {
            $(this).children('span').hide();
        })
    })

})