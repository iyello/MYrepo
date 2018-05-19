$(function(){
    $('#button .button').hover(function(){
        var hey=$(this).attr('data');
        $('.tipf em').text(hey);
        var pos=$(this).position().left+10;
        var dis=($('.top').outerWidth()-$(this).outerWidth())/2;
        var l=pos-dis;
        $('.tipf').css({'left':l+'px'}).animate({'top':190,'opacity':1},500);
    },function(){
        $('.tipf').animate({'top':100,'opacity':0},500);

    });
});
