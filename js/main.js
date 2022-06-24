window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('title').innerHTML = tab.title;
    document.getElementById('url').innerHTML = tab.url;
    });
};

//現在のページ情報を取得する
window.onload = function() {
    chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('title').innerHTML = tab.title;
    document.getElementById('url').innerHTML = tab.url;
    });
};