$(function () {
    console.log("コンテントスクリプトだよ");
    // div要素のclass名を取得
    var className = $("div").attr("class");
    console.log(className);
    //本体のcssを変更
    $("." + className).wrap('<div id = "html"/>');
    $("." + className).css('flex-grow', '2');
    //追加したdivのcss変更  
    $('#html').css('display', 'flex');
    $('#html').css('flex-direction', 'row');
    $('#html').css('height', '100%');
    //追加したdivにさらにメイン機能の拡張機能のdiv追加
    $("#html").prepend('<div id = "newhtml"></div>');
    //拡張機能のhtml
    var html = "<h2>Sylvanian Extension</h2>";
    html += "<a href='#' target='_brank'>よく使うもの</a>"
    // aタグのクリックアクション
    $(document).ready(function () {
        $("#newhtml").find("a").click(function () {
            location.href = "http://nt24.ecc.ac.jp/~ie4a05/herioproject/favorite.html";
            console.log("クリック！");
            return false;
        })
    })
    //拡張機能のcss
    $('#newhtml').css('background', '#005731');
    $('#newhtml').css('color', 'white');
    // 拡張機能のhtml文追加
    $("#newhtml").prepend(html);
})

