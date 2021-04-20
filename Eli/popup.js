$(function(){

    chrome.storage.sync.get('speak_rate',function(eli){
        $('#rate_value').text(eli.speak_rate);
        $('#rate_slider').val(eli.speak_rate);
    });

    var slider = document.getElementById("rate_slider");
    var output = document.getElementById("rate_value");
    output.innerHTML = slider.value;


    rate_slider.oninput = function() {
        output.innerHTML = this.value;
      };

    chrome.storage.sync.set({'speak_rate':slider.value},function(eli){

        var check = $("#rate_value").val();

        if(check!=eli.speak_rate ){
            $("#rate_value").val(store_rate);

        }


    });
    
    chorme.runtime.sendMessage({change_rate:slider.value});
    

})