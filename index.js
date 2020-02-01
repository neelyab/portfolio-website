function hoverLi (){
$('li').hover(function (){
    $(this).css('opacity', '60%').css('font-weight', 'bold');
}, function() {
    $(this).css('opacity', '100%').css('font-weight', 'normal');
});
}
function hoverButton(){
    $('button').hover(function(){
        $(this).css('background-color', '#1196AD').css('border', 'solid 1px white').find('a').css('color', 'white');
    }, function(){
        $(this).css('background-color', 'white').css('border','solid 1px black').find('a').css('color', '#534E4D')
    })
}

function fadeInHello () {
        $('main').hide();
        $('main').fadeIn(1000);
}
function runFunctions (){
    hoverButton();
    hoverLi();
    fadeInHello();
}

$(runFunctions);
