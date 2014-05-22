chrome.contextMenus.create({
    "title": "屏蔽图片",
    "contexts": ["all"],
    "onclick": function(info, tab) {
        console.log("222");
        var url = info.linkUrl;
        var title = decodeURI(url.substr(url.lastIndexOf("/") + 1));
        var json = JSON.parse(localStorage.getItem("Shield"));
        if (json) {
            var titleArr = json.titleArr;
            var urlArr = json.urlArr;
            var index = -1;
            for (var i = 0; i < urlArr.length; i++) {
                if (url == urlArr[i]) return
            }
            titleArr[titleArr.length] = title;
            urlArr[urlArr.length] = url
        } else {
            json = {
                "titleArr ": [title],
                "urlArr ": [url]
            }
        }
        localStorage.setItem("Shield", JSON.stringify(json));
        chrome.tabs.executeScript(tab.id, {
            code: 'var childs=document.getElementsByTagName("a");var index=-1;for(i=0;i<childs.length;i++){if(childs[i].href=="' + url + '"){index=i;}}childs[index].parentNode.parentNode.removeChild(childs[index].parentNode);'
        },
        function(result) {})
    }
});
chrome.webRequest.onBeforeRequest.addListener(function(info) {
    var json = JSON.parse(localStorage.getItem("Replace"));
    if (json) {
        var oldUrlArr = json.oldUrlArr;
        var newUrlArr = json.newUrlArr;
        for (var i = 0; i < oldUrlArr.length; i++) {
            if (info.url == oldUrlArr[i]) {
                var newUrl = newUrlArr[i];
                return {
                    redirectUrl: newUrl
                }
            }
        }
    }
},
{
    urls: ["<all_urls>"]
},
["blocking"]),
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
        if (tab.url == "http://www.bilibili.tv/video/bgm_calendar.html") {
            var json = JSON.parse(localStorage.getItem("Shield"));
            if (json) {
                var urlArr = json.urlArr;
                for (var i = 0; i < urlArr.length; i++) {
                    var url = urlArr[i];
                    url = url.replace('\"', '');
                    chrome.tabs.executeScript(tabId, {
                        code: 'var childs=document.getElementsByTagName("a");var index=-1;for(i=0;i<childs.length;i++){if(childs[i].href=="' + url + '"){index=i;}}childs[index].parentNode.parentNode.removeChild(childs[index].parentNode);'
                    },
                    function(result) {
                        console.log(result)
                    })
                }
            }
        }
    }
});