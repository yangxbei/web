function audiocontrol1(){
    document.getElementById('audio_btn2').pause();
    document.getElementById('audio_btn3').pause();
    document.getElementById('audio_btn4').pause();
    document.getElementById('audio_btn5').pause();
    document.getElementById('audio_btn6').pause();
    $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn1');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}
function audiocontrol2(){
    document.getElementById('audio_btn1').pause();
    document.getElementById('audio_btn3').pause();
    document.getElementById('audio_btn4').pause();
    document.getElementById('audio_btn5').pause();
    document.getElementById('audio_btn6').pause();
    $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn2');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}
function audiocontrol3(){
    document.getElementById('audio_btn2').pause();
    document.getElementById('audio_btn1').pause();
    document.getElementById('audio_btn4').pause();
    document.getElementById('audio_btn5').pause();
    document.getElementById('audio_btn6').pause();
    $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn3');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}
function audiocontrol4(){
    document.getElementById('audio_btn2').pause();
    document.getElementById('audio_btn3').pause();
    document.getElementById('audio_btn1').pause();
    document.getElementById('audio_btn5').pause();
    document.getElementById('audio_btn6').pause();
    $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn4');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}
function audiocontrol5(){
    document.getElementById('audio_btn2').pause();
    document.getElementById('audio_btn3').pause();
    document.getElementById('audio_btn4').pause();
    document.getElementById('audio_btn1').pause();
    document.getElementById('audio_btn6').pause();
    $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn5');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}
function audiocontrol6(){
    document.getElementById('audio_btn2').pause();
    document.getElementById('audio_btn3').pause();
    document.getElementById('audio_btn4').pause();
    document.getElementById('audio_btn5').pause();
    document.getElementById('audio_btn1').pause();
    $('#btn2').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn3').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn4').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn5').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    $('#btn1').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
    var audio = document.getElementById('audio_btn6');
    audio.volume = .3;
    event.stopPropagation();//防止冒泡
    if(audio.paused){ //如果当前是暂停状态
        $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/play.png) no-repeat','background-size':'80px 80px'});
        audio.play(); //播放
        return;
    }else{//当前是播放状态
        $('#btn6').css({'margin':'20px 0 0 80px','background':'url(./images/pause.png) no-repeat','background-size':'80px 80px'});
        audio.pause(); //暂停
    }
}