var a=25;
var maxtime =a * 60;

function CountDown{
        if (maxtime >= 0) {
            minutes = Math.floor(maxtime / 60);
            seconds = Math.floor(maxtime % 60);
            msg = "距离结束还有" + minutes + "分" + seconds + "秒";
            document.all["timer"].innerHTML = msg;
            --maxtime;
        } else{
            clearInterval(timer);
            alert("时间到，结束!");
        }
        timer = setInterval("CountDown      ()", 1000);
    }
