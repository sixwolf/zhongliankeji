/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {


    //�����ֲ���Ч
    var lis = $('.tags li')
    //�����е�li��ǩ����
    $('.scroll ul li').each(function () {
        $(this).css({display: 'none'});
    })
    //����ǰ��li���еı�ǩ��ʾͬʱ����һ��СԲ����ʾ��ɫ
    $('.scroll ul').each(function () {
        $(this).children().eq(0).css({display: 'block', 'opacity': 0.8});
    })
    $(lis[0]).css({backgroundColor: '#5CE55C'})
    //�����Զ��ֲ�
    var count = 0;
    setInterval(function () {
        count++;
        if (count > 3) {
            count = 0;
        }

        //�����Զ��л�-s
        $('.scroll ul li').each(function () {
            $(this).css({display: 'none'});
        })
        //����ǰ��li���еı�ǩ��ʾ
        $('.scroll ul').each(function () {
            var aa = $(this).children().eq(count).css({display: 'block', 'opacity': 0.8});
            //console.log(aa);
        })
        for (var j = 0; j < $('.scroll ul').length; j++) {
            var obj = $('.scroll ul')[j];
            $(".scroll ul").each(function (key) {
                $(this).css({
                    'opacity': 1,
                    "transform": "rotateX(" + -90 * count + "deg)",
                    "transition-delay": key * 0.1 + "s"

                })
            })
        }
        //�����Զ��л�-e
        //��������ƶ��л�-s
        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function () {
                for (var k = 0; k < lis.length; k++) {
                    $(lis[k]).css({backgroundColor: '#898890'});
                }
                $(this).css({backgroundColor: '#5CE55C'})
                //console.log(this.value);
                var index = Math.floor(this.value);
                count = index;
                //�����е�li��ǩ����
                $('.scroll ul li').each(function () {
                    $(this).css({display: 'none'});
                })
                //����ǰ��li���еı�ǩ��ʾ
                $('.scroll ul').each(function () {
                    var aa = $(this).children().eq(count).css({display: 'block', 'opacity': 0.8});
                    //console.log(aa);
                })
                for (var j = 0; j < $('.scroll ul').length; j++) {
                    var obj = $('.scroll ul')[j];
                    $(".scroll ul").each(function (key) {
                        $(this).css({
                            'opacity': 1,
                            "transform": "rotateX(" + -90 * count + "deg)",
                            "transition-delay": key * 0.1 + "s"

                        })
                    })
                }
            }
        }
//��������ƶ��л�-e
//        ���õ�ǰСԲ�����
        for (var k = 0; k < lis.length; k++) {
            $(lis[k]).css({backgroundColor: '#898890'});
        }
        $(lis[count]).css({backgroundColor: '#5CE55C'})
    }, 5000)

    //�������Ͻ�nav
    $(".keep_nav").children().children().each(function () {
        $(this).children('ul').hide();//�ȳ�ʼ������
        $(this).on('mouseenter', function () {
            $(this).children('a').css({color: 'lightseagreen'})
            $(this).children('ul').stop(true, true).slideDown(100);

        })
        $(this).on('mouseleave', function () {
            $(this).children('a').css({color: 'white'})
            $(this).children('ul').slideUp();
        })
    })

    //�̶�nav
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

    //��ȡ��Ļ�����������
    var mark = true;//��ӽ�����
    //��ʼ���ж�
    if ($(window).width() < 767) {
        mark = false;
        $('.header').slideDown();
        $('#main').css({top: 95})
    } else {
        mark = true;
        $('.header').slideUp();
        $('#main').css({top: 0})
    }
    $('.weDo .container').children('ul').fadeOut();
    $('.service-process span.text').fadeOut();//���÷����������ֳ�ʼ��
    //���̶�����ʼ���ж�
    if ($(window).width() < 1190) {
        $('.service-process .container .process').hide();
        $('.service-process').css({height: 450, overflow: 'hidden'})
    } else {
        $('.service-process .container .process').show();
        $('.service-process').css({height: 729, overflow: 'hidden'})
    }

    //���ڱ仯�͹����仯�ж�
    window.onresize = function () {
        if ($(window).width() < 767) {
            mark = false;
            $('.header').slideDown();
            $('#main').css({
                top: 95
            })
        } else {
            mark = true;
            $('.header').slideUp();
            $('#main').css({
                top: 0
            })
        }
        //���̶����ж�
        if ($(window).width() < 1190) {
            $('.service-process .container .process').hide();
            $('.service-process').css({height: 450, overflow: 'hidden'})
        } else {
            $('.service-process .container .process').show();
            $('.service-process').css({height: 729, overflow: 'hidden'})
        }
    }
    window.onscroll = function () {
        //console.log($(document).scrollTop());
        //���ù̶�nav
        if (mark) {
            if ($(document).scrollTop() > 550) {
                $('.header').slideDown();
            } else {
                $('.header').slideUp();
            }
        }
        //������������ʲô
        if ($(document).scrollTop() > 300) {
            $('.weDo .container').children('ul').slideDown(300);
        }
        //���÷�������
        if ($(document).scrollTop() > 1000) {
            $('.service-process span.text').slideDown(1500);
            $('.service-process .i1').animate({opacity: 1}, 400, function () {
                $('.service-process .i2').animate({opacity: 1}, 400, function () {
                    $('.service-process .i3').animate({opacity: 1}, 400, function () {
                        $('.service-process .i4').animate({opacity: 1}, 400, function () {
                            $('.service-process .i5').animate({opacity: 1}, 400, function () {
                                $('.service-process .i6').animate({opacity: 1}, 400, function () {
                                    $('.service-process .i7').animate({opacity: 1}, 400, function () {
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
    }

    //what can we do-s
    $('.weDo .container ul div').children('li').each(function (k) {
        $(this).on('mouseenter', function () {
            $(this).children('img').stop(true, true).attr({src: 'main/images/main-img/ab_0' + k + '.png'}).animate({marginTop: 0}, 500)
            $(this).children('.text').children('h4').css({color: 'white'});
            $(this).children('.bgc').stop(true, true).animate({bottom: 0}, 500, function () {
                $('.weDo .text span').stop(true, true).animate({opacity: 1}, 300)
            })
        })
        $(this).on('mouseleave', function () {
            $(this).children('img').stop(true, true).attr({src: 'main/images/main-img/ab_0' + (k + 4) + '.png'}).animate({marginTop: -30}, 500)
            $(this).children('.text').children('h4').css({color: 'black'});
            $(this).children('.bgc').stop(true, true).animate({bottom: -135}, 500, function () {
                $('.weDo .text span').stop(true, true).animate({opacity: 0}, 300)
            })
        })
    })

    //����ͻ�
    $('.customer-service .container li').each(function () {

        $(this).on('mouseenter', function () {
            $(this).children('em').stop().slideDown();
        });
        $(this).on('mouseleave', function () {
            $(this).children('em').stop().slideUp();
        })
    })

    //�ɹ�����
    $('.success-case .container li').each(function () {
        $(this).children('span').hide();
        $(this).on('mouseenter', function () {
            $(this).children('span').show(300);
        });
        $(this).on('mouseleave', function () {
            $(this).children('span').hide();
        })
    })

    //foot����
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

    //��̨���ݲ���
    var i = 0;
    var a = 0;
    data(i);
    $('.info .change-button').on('click', function () {
        a++;
        if (a % 2 == 0) {
            i = 0;
        } else {
            i = 1;
        }
        data(i);


    })
    //��װ
    //��ҳ��ajax-data
    function data(i) {
        $.post('main/json/main.json', '', function (data) {
            var data1 = data.company[i];
            var data2 = data.industry[i];
            var data3 = data.expertise[i];
            // ����ģ������
            var html1 = template('tpl', data1);
            var html2 = template('tpl', data2);
            var html3 = template('tpl', data3);
            var html = html1 + html2 + html3;
            document.querySelector('.info .container .tpl').innerHTML = html;
        })
    }
})