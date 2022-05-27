$(function () {
    console.log("コンテントスクリプトだよ");
    // div要素のclass名を取得
    var className = $("div").attr("class");
    console.log(className);
    //関数cssadd呼び出し
    cssadd(className);
    //拡張機能のhtml
    htmladd();
    // aタグのクリックアクション
    $(document).ready(function () {
        $("#newhtml").find("a").click(function () {
            location.href = "http://nt24.ecc.ac.jp/~ie4a05/herioproject/favorite.html";
            console.log("クリック！");
            return false;
        })
    })
    //拡張機能のcss
    excssadd();
})

//本体に拡張機能の要素を追加
function cssadd(tagname) {
    console.log("関数cssadd呼び出し")
    $("." + tagname).wrap('<div id = "html"/>');
    $("." + tagname).css('flex-grow', '2');
    //追加したdivのcss変更  
    $('#html').css('display', 'flex');
    $('#html').css('flex-direction', 'row');
    $('#html').css('height', '100%');
    //追加したdivにさらにメイン機能の拡張機能のdiv追加
    $("#html").prepend('<div id = "newhtml"></div>');
}

//拡張機能のhtml追加
function htmladd(){
    var html = "";
    html = "<h2>Sylvanian Extension</h2>";
    html += "<a href='#' target='_brank'>よく使うもの</a>";
    // 拡張機能のhtml文追加
    $("#newhtml").prepend(html);
}

//拡張機能のcss追加
function excssadd(){
    $('#newhtml').css('background', '#005731');
    $('#newhtml').css('color', 'white');
}