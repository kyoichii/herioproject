//現在の文字の大きさを格納する変数
var mojisize = 0;

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
            location.href = "http://nt24.ecc.ac.jp/~ie4a05/herioproject/html/favorite.html";
            console.log("クリック！");
            return false;
        })
    })
    //拡張機能のcss
    excssadd();
    //プラスボタン処理
    $('.p-button').on('click', function() {
        mojichange(className, 1, mojisize);
    });
    //マイナスボタン処理
    $('.m-button').on('click', function() {
        mojichange(className, 2, mojisize);
    });
})

//文字の大きさを変更する関数
function mojichange(className,flg,nowsize){
    
    if(flg == 1){
        nowsize += 30;
    }else if(flg ==2){
        nowsize -= 30;
    }
    $("." + className).css('font-size', nowsize);
    mojisize = nowsize;
}

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
function htmladd() {
    var html = "";
    html = "<h1>Sylvanian Extension</h1>";
    html +="<div id ='text'>";
        html += "<div class='word-huge-change'>";
            html += "<a href='#' target='_brank'>よく使うもの</a><br>";
            html += "<div class=colorsetmain>";
                    html += "<button type='button class='back'>前のページに戻る　↲</button>";
                html += "</div>";
                html += "<div id ='text'>";
                    html += "<button type='button class='next'>次のページへ進む　↱</button>";
                html += "</div>";
            html += "</div>";
            html += "<div class ='text'><p>文字サイズ変更</p>";
            html += "</div>";
            html += "<div id='button'>";
                html += "<button type='button' class='m-button'>-</button>";
                html += "<button type='button' class='p-button'>+</button>";
                html += "</div>";
            html += "</div>";
        html += "</div>";
    html += "</div>";

    // 拡張機能のhtml文追加
    $("#newhtml").prepend(html);
}

//拡張機能のcss追加
function excssadd() {
    $('#newhtml').css('background', '#005731');
    $('#newhtml').css('color', 'white');
    $('h1').css('font-weight','bold');
    $('h1').css('border-bottom','1px solid white');
    $('.word-huge-change').css('line-height','2.5em');  
    $('.colorsetmain').css('color','white');
    //$('html').css('line-height','normal');
    $('.back').css('line-height','2ex');
    $('#button').css('display','flex');
    $('#button').css('text','50px');
    $('#button').css('justify-content','space-evenly');
    $('#text').css('text-align','center');
    $('.p-button').css('border','solid 2px white');
    $('.p-button').css('height','25px');
    $('.p-button').css('width','15px');
    $('.p-button').css('margin: 50px auto 0 auto');
    $('.m-button').css('border','solid 2px white');
    $('.m-button').css('width','15px');
    $('.m-button').css('height','25px');
}
