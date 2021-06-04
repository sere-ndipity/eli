var speak = {
    "id":"speak",
    "title":"Speak Out",
    "contexts":["selection"],
    
};

var dict  ={
    "id":"dictionary",
    "title":"Check Meaning",
    "contexts":["selection"]
};

chrome.contextMenus.create(speak);
chrome.contextMenus.create(dict);



chrome.storage.sync.get('speak_rate',function(eli){
    if(eli.speak_rate){
        chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
            if(request.todo == "change_speak_rate" ){
                change_rate = eli.speak_rate;
            }
        });
    }
});

var url_dict= "https://www.google.com/search?q=dictionary&rlz=1C1CHBD_enIN853IN853&sxsrf=ALeKk00iVW1zRCkxUWWk2YxsB61O7JUhzA%3A1618673959012&ei=JwF7YNEbxa_1A-efjrAD&oq=dictio&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCAAQsQMQQzIECAAQQzIHCAAQhwIQFDICCAAyBQgAELEDMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6BwgAEEcQsAM6BAgjECc6DQgAEIcCELEDEIMBEBQ6CAgAELEDEIMBOgcIIxDqAhAnOgoIABCxAxCDARBDOgsILhCxAxDHARCjAjoKCC4QxwEQowIQQzoKCAAQhwIQsQMQFDoFCC4QsQNQtzlYz09gxlVoAnACeACAAZwBiAHgB5IBAzAuOJgBAKABAaoBB2d3cy13aXqwAQrIAQjAAQE&sclient=gws-wiz#dobs="

function dict_url(str){
    return url_dict + str;
};



chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == dict.id && clickData.selectionText){
        var search_url = dict_url(clickData.selectionText);

        var find_meaining = {
            
            "url": search_url,
            "type": "popup",
            "top" : 5,
            "left": 5,
            "width":screen.availWidth/2,
            "height": screen.availHeight/2
        };

        chrome.windows.create(find_meaining ,function(){
            console.log("window created")
        });

    };


    if(clickData.menuItemId == speak.id && clickData.selectionText){
        
        //chrome.tts.speak(clickData.selectionText,{"rate":change_rate});

       
        var curr_rate =parseFloat(localStorage.getItem('speed')); 
        if(curr_rate!==1)
        {
            curr_rate =curr_rate/5;
        }
        const curr_lang = localStorage.getItem('lang');
          console.log("speaking now at rate ",curr_rate," and lang :",curr_lang);
      
      
        
        
        chrome.tts.speak(
            clickData.selectionText,{'rate': curr_rate,'lang':curr_lang},
            function() {
              if (chrome.runtime.lastError) {
                console.log('Error: ' + chrome.runtime.lastError.message);
              }
            }
          );

          
    
    };


});





/* 
name: Google Deutsch
  1 lang: de-DE

 name: Google US English
  2lang: en-US

name: Google UK English Female
  3lang: en-GB

  name: Google español
   4 lang: es-ES

name: Google français
   5 lang: fr-FR

 name: Google हिन्दी
  6 lang: hi-IN

   name: Google italiano
   7 lang: it-IT

   name: Google 日本語
   8 lang: ja-JP
    
   9name: Google 한국의
  lang: ko-KR

*/
