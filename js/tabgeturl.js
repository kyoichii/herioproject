// 現在のページを取得する

// 未完成コード
window.onload = function () {
    var el = document.getElementById("back-button");
    el.onclick = sayHello;

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, tabs => {
        const url = tabs[0].url
        console.log(url);

    })
}

function sayHello() {
    console.log("Hello");
    console.log("現在のurl:");
}