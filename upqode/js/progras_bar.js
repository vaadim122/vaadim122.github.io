var target = $('.skillbar');
var jqBarStatus = true;
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem && jqBarStatus){
        { jqBarStatus = false;
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                }, 4000)
            });
            $('.count').each(function(){
                $(this).prop('Counter',0).animate({
                    Counter:$(this).text()
                },{
                    duration: 4000,
                    easing: 'swing',
                    step:function(now){
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    }
});