
function ImageHosting_Click() {
    $("#startButtons").click(function () {
        // var num= 100;
        // var kkkk = num-10;

        document.getElementById("result").innerHTML = ""; 
        var timeleft = 5;  
        var downloadTimer = setInterval(function function1(){       
        document.getElementById("countdown").innerHTML = timeleft +  
        "&nbsp"+"seconds remaining";

        timeleft -= 1;
        if(timeleft <= 0){
           
            clearInterval(downloadTimer);
 
            document.getElementById("countdown").innerHTML = "Time is up!";
             let gamess = Math.floor(Math.random() * 2);
            
             document.getElementById("result").innerHTML = gamess;  
             if(gamess == 0){

                document.getElementById("result").innerHTML =  "you lose";  
              }else{
                document.getElementById("result").innerHTML = "you win";  
              }
        }        
    
        }, 1000); 
        document.getElementById("countttt").innerHTML = kkkk;  
       
    });
    
}
    











   

