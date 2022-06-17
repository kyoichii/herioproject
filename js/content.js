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
    //拡張機能の履歴html追加
    rihtml();
    //履歴htmlのcss
    ricss();
    // aタグのクリックアクション

    // よく使うものクリックアクション
    $(document).ready(function () {
        $("#newhtml").find("a").click(function () {
            //ブックマークページへ移動
            location.href = "http://127.0.0.1/html/favorite.html";
            console.log("クリック！");
            return false;
        })
    })
    //拡張機能のcss
    excssadd();
    //ページが読み込まれたときにCookieを保存する関数
    Cookiesave();

    //backボタンclickイベント
    $('.back').on('click', function () {
        console.log('戻るボタンクリック')
        // // //Cokkieの値取得
        // let backurl = getCookie('backurl')
        // console.log('backurl:' + backurl)
        window.history.back();
    })

    //進むボタンclickイベント
    $('.next').on('click', function () {
        console.log('進むボタンクリック');
        // //Cokkieの値取得
        // let moveurl = getCookie('moveurl')
        // console.log('moveurl:' + moveurl)
        window.history.forward();
    });

    //プラスボタン処理
    $('.p-button').on('click', function () {
        mojichange(className, 1, mojisize);
    });
    //マイナスボタン処理
    $('.m-button').on('click', function () {
        mojichange(className, 2, mojisize);
    });
})

//ページが読み込まれたときにCookieの値を保存する関数
function Cookiesave() {
    var nowurl = $(location).attr('href');      //現在のurlを取得
    if (navigator.cookieEnabled) {
        //一つ前のurlをmoveurlに格納して現在のurlをnowurlに格納
        document.cookie = 'nowurl=' + nowurl


        // //値を隠してCookie保存 (のちにパスワード保存のとこで使うかもしれないので保管。)
        // let name = encodeURIComponent('田中')
        // document.cookie = 'name=' + name
    }
}

//Cookie値をgetする関数
function getCookie(value) {
    //Cokkieの値取得
    var cookies = document.cookie;                      //全てのcookieを取り出して
    var cookiesArray = cookies.split(';');              // ;で分割し配列に
    for (var c of cookiesArray) {                       //一つ一つ取り出して
        var cArray = c.split('=');                      //さらに=で分割して配列に
        console.log(cArray)
        if (cArray[0] == ' ' + value) {                 // 取り出したいkeyと合致したら
            return (cArray[1])                           //value値をreturnする

        }
    }
}

//文字の大きさを変更する関数
function mojichange(className, flg, nowsize) {

    if (flg == 1) {
        nowsize += 30;
    } else if (flg == 2) {
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
    $("#newhtml").prepend('<div id = "rirekihtml"></div>');
}

//拡張機能のhtml追加
function htmladd() {
    var html = "";
    html = "<h1>Sylvanian Extension</h1>";
    html += "<div id ='text'>";
    html += "<div class='word-huge-change'>";
    html += "<a href='#' target='_brank'>よく使うもの</a><br>";
    html += "<div class=colorsetmain>";
    html += "<button type=button class='back'>前のページに戻る　↲</button>";
    html += "</div>";
    html += "<div id ='text'>";
    html += "<button type=button class='next'>次のページへ進む　↱</button>";
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
    $('h1').css('font-weight', 'bold');
    $('h1').css('border-bottom', '1px solid white');
    $('h1').css('text-align', 'center');
    $('.colorsetmain').css('color', 'white');
    $('.back').css('line-height', '2ex');
    $('.back').css('background', 'rgb(0, 87, 49)');
    $('.next').css('background', 'rgb(0, 87, 49)');
    $('#button').css('display', 'flex');
    $('#button').css('text', '50px');
    $('#button').css('justify-content', 'space-evenly');
    $('#text').css('text-align', 'center');
    $('.p-button').css('border', 'solid 2px white');
    $('.p-button').css('height', '25px');
    $('.p-button').css('width', '15px');
    $('.p-button').css('background','rgb(0, 87, 49)');
    $('.m-button').css('background', 'rgb(0, 87, 49)');
    $('.m-button').css('border', 'solid 2px white');
    $('.m-button').css('width', '15px');
    $('.m-button').css('height', '25px');
}

// 拡張機能の履歴機能html追加
function rihtml() {
    var rihtml = ""
    rihtml += "<div class ='rireki'><hr></div>";
    rihtml += "<table border=1 bgcolor=white width=98%>";
    rihtml += "<thead>";
    rihtml += "<tr>";
    rihtml += "<th>操作履歴</th></tr></thead>";
    rihtml += "<tbody>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr>";
    rihtml += "<tr>";
    rihtml += "<td>ここに表示</td></tr></tbody>";
    $("#rirekihtml").prepend(rihtml);
}


// 拡張機能の履歴機能css追加
function ricss() {
    $('table').css('color', 'black');
    $('thead').css('display', 'block');
    $('tbody').css('display', 'block');
    $('tbody').css('overflow-x', 'hidden');
    $('tbody').css('overflow-y', 'scroll');
    $('tbody').css('height', '200px');
    $('th').css('width', '195px');
    $('td').css('width', '200px');
}
