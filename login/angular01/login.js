var culture = angular.module('s7.com', [])
culture.controller('companyController', function ($scope) {
       var  boolean1=/^\w{3,20}$/
        console.log(typeof boolean1);
        //var boolean1=/^\w{3,20}$/.test($('.login .container li:eq(0) .name').val())

        login( $('.login .container .box li:eq(0) input'),'/^\w{3,20}$/',0)



            //login($(this),/^\w{3,20}$/,k)

            /*$(this).on('blur', function () {

                var nameReg = /^\w{3,20}$/;
                var value = $('.login .container li .name').val()
                console.log(nameReg.test(value));
                if (nameReg.test(value)) {
                    $('.login .container li:eq('+aa+') .right').show()
                    $('.login .container li:eq('+aa+') .error').hide()
                } else {
                    $('.login .container li:eq('+aa+') .error').show()
                    $('.login .container li:eq('+aa+') .right').hide()
                }

            })
            $(this).on('focus', function () {
                $('.login .container li:eq('+aa+') .error').hide()
            })










*/

        //·â×°º¯Êý
        function login(ele,index,regex){
            var aa=regex
            ele.on('blur', function () {
                //var nameReg =/^\w{3,20}$/
              /*  var nameReg =regex
                var value = $('.login .container li:eq('+index+') .name').val()
                console.log(value);*/
                //var regex=eval(regex)
                var regex=aa;
                console.log(regex);

                if (regex.test($('.login .container li:eq('+index+') .name').val())) {
                    $('.login .container li:eq('+index+') .right').show()
                    $('.login .container li:eq('+index+') .error').hide()
                } else {
                    $('.login .container li:eq('+index+') .error').show()
                    $('.login .container li:eq('+index+') .right').hide()
                }

            })
            $(this).on('focus', function () {
                $('.login .container li:eq('+index+') .error').hide()
            })
        }
        }
    )



















