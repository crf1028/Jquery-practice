/**
 * Created by rongfeng on 3/17/2016.
 */

$(document).ready(function () {
    var $main_c = $('#main_content');
    var $main_ipt_a = $('.main_ipt_a');
    var $main_ipt_n = $('.main_ipt');
    var $col = $('.col-md-1');
    var $shared_i =  $('#s_i_ipt');
    var $err_msg = $('#er_msg');
    // var $debug = $('#debug');
    var num = '';
    // TODO add default text to main_ipt_a 'can enter equation like 4+5*8'; add convert name<input> to <p>;
    $main_c.hide();
    $col.hide();
    $('#get_num').keypress(function (e) {
        num = $(this).val();

        if (e.which == 13) {
            if ($.isNumeric(num) && num > 1 && num < 12) {
                $main_c.fadeIn('fast');
                $col.each(function (index) {
                    if (index < num) {
                        $(this).fadeIn('fast');
                    } else {
                        return false;
                    }
                });
                $('#col_12').fadeIn('fast');
                $('#get_num_c').fadeOut('fast');
                ad_size(num);
            } else {
                $('#get_num_p').html('Please enter a valid number');
                $(this).val('');
            }
        }
    });

    var s_i = 0;
    var temp_array = [];
    $('.btn-default').click(function () {
        if (ipt_amt_check(num) != 'need_equ') {
            if (m_ipt_check(num) == 'more_data') {
                $err_msg.html('Fill all the amount pls');
            }
            else {
                if (m_ipt_check(num)) {
                    $err_msg.html('Shared item entered');
                    s_i = eval($shared_i.val()) / num;
                } else {
                    $err_msg.html('No shared item entered');
                }

                $main_ipt_a.each(function (index) {
                    if (index < num) {
                        temp_array.push(eval($(this).val()) + s_i);
                    } else {
                        return false
                    }
                });

                $('.result').each(function (index) {
                    if (index < num) {
                        $(this).html(temp_array[index]);
                    } else {
                        return false
                    }
                });
            }
            temp_array = []
        }
    });


    var ad_size = function (figure) {
        switch (Math.floor(12 / (parseInt(figure) + 1))) {
            case 1:
                break;
            case 2:
                $main_ipt_a.attr('size', 5);
                $main_ipt_n.attr('size', 5);
                $col.addClass('col-md-2').removeClass('col-md-1');
                break;
            case 3:
                $main_ipt_a.attr('size', 15);
                $main_ipt_n.attr('size', 15);
                $col.addClass('col-md-3').removeClass('col-md-1');
                break;
            case 4:
                $main_ipt_a.attr('size', 25);
                $main_ipt_n.attr('size', 25);
                $col.addClass('col-md-4').removeClass('col-md-1');
                break;
        }
    };

    var m_ipt_check = function (figure) {
        var flag = 0;
        $main_ipt_a.each(function (index) {
            if (index < figure) {
                if ($(this).val() == '') {
                    flag = 1;
                    return false;
                }
            } else{
                return false;
            }
        });
        if (flag == 1) {
            return 'more_data';
        }
        else {
            return $shared_i.val();
        }
    };

    var ipt_amt_check = function (figure) {
        var flag = 0;
        $main_ipt_a.each(function (index) {
            if (index < figure) {
                try {
                    eval($(this).val());
                } catch (err) {
                    flag = 1;
                    $err_msg.html('enter a valid equation');
                    return false;
                }
            }
        });
        if (flag == 1){
            return 'need_equ'
        } else{
            return 'no_need'
        }
    };
});

