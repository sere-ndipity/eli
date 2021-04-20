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

var change_rate = document.getElementById("rate_slider");

chrome.storage.sync.get('speak_rate',function(eli){

    change_rate = eli.speak_rate;
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
        
        chrome.runtime.OnMessage.addListener(function(request,sender,sendResponse){
            
        });

        chrome.tts.speak(clickData.selectionText,{"rate":change_rate});
    };


});

