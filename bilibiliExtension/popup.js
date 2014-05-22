function showReplace() {
    document.getElementById("show").innerHTML = '<table><tbody><tr><td>旧地址<input type="text"id="oldUrlInput"style="width:200px"><br/>新地址<input type="text"id="newUrlInput"style="width:200px"></td><td><button style="width:80px"id="addReplaceButton">添加</button></td></tr><tr><td><select id="ReplaceSelect"size="20"multiple="true"style="width: 300px; background: white;"></select></td><td><button style="width:80px"id="deleteReplaceButton">删除</button></td></tr></tbody></table>';
    document.getElementById("oldUrlInput").value = localStorage.getItem("oldUrl");
    document.getElementById("newUrlInput").value = localStorage.getItem("newUrl");
    var json = JSON.parse(localStorage.getItem("Replace"));
    if (json) {
        var ReplaceSelect = document.getElementById("ReplaceSelect");
        var oldUrlArr = json.oldUrlArr;
        var newUrlArr = json.newUrlArr;
        for (var i = 0; i < oldUrlArr.length; i++) {
            var oldUrlOption = document.createElement('option');
            oldUrlOption.text = oldUrlArr[i];
            oldUrlOption.style.backgroundColor = "#87CEEB";
            var newUrlOption = document.createElement('option');
            newUrlOption.text = newUrlArr[i];
            newUrlOption.style.backgroundColor = "#F0F8FF";
            ReplaceSelect.add(oldUrlOption, null);
            ReplaceSelect.add(newUrlOption, null)
        }
    }
    document.getElementById("oldUrlInput").addEventListener("input",
    function() {
        localStorage.setItem("oldUrl", document.getElementById("oldUrlInput").value)
    },
    false);
    document.getElementById("newUrlInput").addEventListener('input',
    function() {
        localStorage.setItem("newUrl", document.getElementById("newUrlInput").value)
    },
    false);
    document.getElementById("addReplaceButton").addEventListener("click", addReplace, false);
    document.getElementById("deleteReplaceButton").addEventListener("click", deleteReplace, false)
}
function addReplace() {
    var oldUrl = document.getElementById("oldUrlInput").value;
    var newUrl = document.getElementById("newUrlInput").value;
    if ((!oldUrl) || (!newUrl)) return;
    var json = JSON.parse(localStorage.getItem("Replace"));
    var index = -1;
    var ReplaceSelect = document.getElementById("ReplaceSelect");
    if (json) {
        var oldUrlArr = json.oldUrlArr;
        var newUrlArr = json.newUrlArr;
        for (var i = 0; i < oldUrlArr.length; i++) {
            if (oldUrl == oldUrlArr[i]) {
                index = i
            }
        }
        if (index >= 0) {
            newUrlArr[index] = newUrl;
            ReplaceSelect.options[2 * index + 1].text = newUrl
        } else {
            index = oldUrlArr.length;
            var oldUrlOption = document.createElement('option');
            oldUrlOption.text = oldUrl;
            oldUrlOption.style.backgroundColor = "#87CEEB";
            var newUrlOption = document.createElement('option');
            newUrlOption.text = newUrl;
            newUrlOption.style.backgroundColor = "#F0F8FF";
            ReplaceSelect.add(oldUrlOption, null);
            ReplaceSelect.add(newUrlOption, null)
        }
    } else {
        json = {
            "oldUrlArr": [],
            "newUrlArr": []
        }
        index = 0;
        var oldUrlOption = document.createElement('option');
        oldUrlOption.text = oldUrl;
        oldUrlOption.style.backgroundColor = "#87CEEB";
        var newUrlOption = document.createElement('option');
        newUrlOption.text = newUrl;
        newUrlOption.style.backgroundColor = "#F0F8FF";
        ReplaceSelect.add(oldUrlOption, null);
        ReplaceSelect.add(newUrlOption, null)
    }
    json.oldUrlArr[index] = oldUrl;
    json.newUrlArr[index] = newUrl;
    localStorage.setItem("Replace", JSON.stringify(json));
    localStorage.removeItem("oldUrl");
    localStorage.removeItem("newUrl");
    document.getElementById("oldUrlInput").value = null;
    document.getElementById("newUrlInput").value = null
}
function deleteReplace() {
    varReplaceSelect = document.getElementById("ReplaceSelect");
    var json = JSON.parse(localStorage.getItem("Replace"));
    var oldUrlArr = json.oldUrlArr;
    var newUrlArr = json.newUrlArr;
    var index = ReplaceSelect.selectedIndex;
    if (index % 2) {
        json.newUrlArr.splice(index / 2, 1);
        json.oldUrlArr.splice(index / 2, 1);
        localStorage.setItem("Replace", JSON.stringify(json));
        ReplaceSelect.remove(index);
        ReplaceSelect.remove(index - 1);
        return
    } else {
        json.newUrlArr.splice(index / 2, 1);
        json.oldUrlArr.splice(index / 2, 1);
        localStorage.setItem("Replace", JSON.stringify(json));
        ReplaceSelect.remove(index + 1);
        ReplaceSelect.remove(index);
        return
    }
}
function showShield() {
    document.getElementById("show").innerHTML = '<table><tbody><tr><td>名字<input type="text"id="titleInput"style="width:200px"><br/>地址<input type="text"id="urlInput"style="width:200px"></td><td><button style="width:80px"id="addShieldButton">添加</button></td></tr><tr><td><select id="ShieldSelect"size="20"multiple="true"style="width: 300px; background: white;"></select></td><td><button style="width:80px"id="deleteShieldButton">删除</button></td></tr></tbody></table>';
    document.getElementById("titleInput").value = localStorage.getItem("title");
    document.getElementById("urlInput").value = localStorage.getItem("url");
    var json = JSON.parse(localStorage.getItem("Shield"));
    if (json) {
        var ShieldSelect = document.getElementById("ShieldSelect");
        var titleArr = json.titleArr;
        var urlArr = json.urlArr;
        for (var i = 0; i < titleArr.length; i++) {
            var titleOption = document.createElement('option');
            titleOption.text = titleArr[i];
            titleOption.style.backgroundColor = "#87CEEB";
            var urlOption = document.createElement('option');
            urlOption.text = urlArr[i];
            urlOption.style.backgroundColor = "#F0F8FF";
            ShieldSelect.add(titleOption, null);
            ShieldSelect.add(urlOption, null)
        }
    }
    document.getElementById("titleInput").addEventListener("input",
    function() {
        localStorage.setItem("title", document.getElementById("titleInput").value)
    },
    false);
    document.getElementById("urlInput").addEventListener('input',
    function() {
        localStorage.setItem("url", document.getElementById("urlInput").value)
    },
    false);
    document.getElementById("addShieldButton").addEventListener("click", addShield, false);
    document.getElementById("deleteShieldButton").addEventListener("click", deleteShield, false)
}
function addShield() {
    var title = document.getElementById("titleInput").value;
    var url = document.getElementById("urlInput").value;
    if ((!title) || (!url)) return;
    var json = JSON.parse(localStorage.getItem("Shield"));
    var index = -1;
    var ShieldSelect = document.getElementById("ShieldSelect");
    if (json) {
        var titleArr = json.titleArr;
        var urlArr = json.urlArr;
        for (var i = 0; i < urlArr.length; i++) {
            if (url == urlArr[i]) {
                index = i
            }
        }
        if (index >= 0) {
            titleArr[index] = title;
            ShieldSelect.options[2 * index].text = title
        } else {
            index = titleArr.length;
            var titleOption = document.createElement('option');
            titleOption.text = title;
            titleOption.style.backgroundColor = "#87CEEB";
            var urlOption = document.createElement('option');
            urlOption.text = url;
            urlOption.style.backgroundColor = "#F0F8FF";
            ShieldSelect.add(titleOption, null);
            ShieldSelect.add(urlOption, null)
        }
    } else {
        json = {
            "titleArr": [],
            "urlArr": []
        };
        index = 0;
        var titleOption = document.createElement('option');
        titleOption.text = title;
        titleOption.style.backgroundColor = "#87CEEB";
        var urlOption = document.createElement('option');
        urlOption.text = url;
        urlOption.style.backgroundColor = "#F0F8FF";
        ShieldSelect.add(titleOption, null);
        ShieldSelect.add(urlOption, null)
    }
    json.titleArr[index] = title;
    json.urlArr[index] = url;
    localStorage.setItem("Shield", JSON.stringify(json));
    localStorage.removeItem("title");
    localStorage.removeItem("url");
    document.getElementById("titleInput").value = null;
    document.getElementById("urlInput").value = null
}
function deleteShield() {
    var ShieldSelect = document.getElementById("ShieldSelect");
    var json = JSON.parse(localStorage.getItem("Shield"));
    var titleArr = json.titleArr;
    var urlArr = json.urlArr;
    var index = ShieldSelect.selectedIndex;
    if (index % 2) {
        json.urlArr.splice(index / 2, 1);
        json.titleArr.splice(index / 2, 1);
        localStorage.setItem("Shield", JSON.stringify(json));
        ShieldSelect.remove(index);
        ShieldSelect.remove(index - 1);
        return
    } else {
        json.urlArr.splice(index / 2, 1);
        json.titleArr.splice(index / 2, 1);
        localStorage.setItem("Shield", JSON.stringify(json));
        ShieldSelect.remove(index + 1);
        ShieldSelect.remove(index);
        return
    }
}
document.addEventListener('DOMContentLoaded',
function() {
    document.getElementById("showShieldButton").addEventListener("click", showShield, false);
    document.getElementById("showReplaceButton").addEventListener("click", showReplace, false);
    showReplace()
});