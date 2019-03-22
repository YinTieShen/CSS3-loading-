
var per = 0;
var backTime = 3;
var timer = setInterval(function(){
    $('.bar').css('width',per+'%')
    per +=1;
    if(per >100){
        clearInterval(timer);
        $('.pageLoading').addClass('complete');
        var timer2 = setInterval(function(){  
            $('div>h1').html(backTime);    
            backTime--;
            console.log(backTime);
            if(backTime < 0){
                clearInterval(timer2);
                $('div>h1').removeClass('num');
                $('div>h1').html('We are <br> SQUARE <br> MONSTER!!');
                $('div>h6').html('Ahhh, We will eat you!!');
            }
        },1000)
    }
},30);
