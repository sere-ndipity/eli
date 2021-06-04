$(function(){

    localStorage.setItem('speed',1);
    localStorage.setItem('leang','en-GB')  // UK English


   var slider = document.getElementById("rate_slider");
   var output = document.getElementById("rate_value");
   output.innerHTML = slider.value;


    rate_slider.oninput = function() {
        output.innerHTML = this.value;
      };

      


      $("#Submit_change").click(function(){
        var change_rate = parseInt(document.getElementById("rate_value").innerHTML);

          console.log("submit clicked");
           localStorage.setItem('speed',change_rate);
        
      });

      $("#usa").click(function(){
        var new_lang = "en-US";
        localStorage.setItem('lang',new_lang);
      });

      $("#spain").click(function(){
        var new_lang = "es-ES";
        localStorage.setItem('lang',new_lang);
      });

      $("#uk").click(function(){
        var new_lang = "en-GB";
        localStorage.setItem('lang',new_lang);
      });

      $("#india").click(function(){
        var new_lang = "hi-IN";
        localStorage.setItem('lang',new_lang);
      });

      $("#japan").click(function(){
        var new_lang = "ja-JP";
        localStorage.setItem('lang',new_lang);
      });

      $("#france").click(function(){
        var new_lang = "fr-FR";
        localStorage.setItem('lang',new_lang);
      });

      $("#italy").click(function(){
        var new_lang = "it-IT";
        localStorage.setItem('lang',new_lang);
      });

      $("#german").click(function(){
        var new_lang = "de-DE";
        localStorage.setItem('lang',new_lang);
      });

      $("#korea").click(function(){
        var new_lang = "ko-KR";
        localStorage.setItem('lang',new_lang);
      });


});
