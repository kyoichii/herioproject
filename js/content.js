//現在の文字の大きさを格納する変数
var mojisize = 0;

$(function () {
    console.log("コンテントスクリプトだよ");
    // div要素のclass名を取得
    var className = $("div").attr("class");
    console.log(className);
    $("." + className).css('padding-top', '100px')
    $("body").prepend('<div id = "newhtml"></div>');
    $("#newhtml").after('<div></div>');
    //追加したdivのcssを編集
    cssadd()
    //拡張機能のhtml
    htmladd();
    // よく使うものクリックアクション
    $(document).ready(function () {
        $("#newhtml").find("#usemenu").click(function () {
            //ブックマークページへ移動
            location.href = "http://nt24.ecc.ac.jp/~ie4a05/herioproject/html/favorite.html";
            console.log("クリック！");
            return false;
        })
    })
    //拡張機能のcss
    excssadd();
    //ページが読み込まれたときにCookieを保存する関数
    Cookiesave();

    //backボタンclickイベント
    $('.backbutton').on('click', function () {
        console.log('戻るボタンクリック')
        // // //Cokkieの値取得
        window.history.back();
    })

    //進むボタンclickイベント
    $('.pushbutton').on('click', function () {
        console.log('進むボタンクリック');
        // //Cokkieの値取得
        window.history.forward();
    });

    //プラスボタン処理
    $('.bigbutton').on('click', function () {
        mojichange(className, 1, mojisize);
    });
    //マイナスボタン処理
    $('.smallbutton').on('click', function () {
        mojichange(className, 2, mojisize);
    });

    //現在のページを追加する処理
    $('.listadd').on('click', function () {
        var nowurl = $(location).attr('href');      //現在のurlを取得
        alert("現在のページをリストに追加します！" + nowurl)
        getJSON('../uselist.json').then(function(r) {
            //JSONファイルを読み込んだ後の処理
            var config = JSON.parse(r);
            console.log(config);
        })

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

// //本体に拡張機能の要素を追加
function cssadd() {
    $("#newhtml").css('position', 'fixed')
    $("#newhtml").css('width', '100%')
    $("#newhtml").css('height', '100px')
    $("#newhtml").css('z-index', '9999')
}

//拡張機能のhtml追加
function htmladd() {
    var html = "<h1>Sylvanian Extension</h1>"
    html += "<div id = 'extensiontype'>"
    html += "<div id = 'uselist'>"
    html += "<p id = 'usemenu'>よく使うものリスト</p>"
    html += "<div class = 'listadd' style = 'font-size:14px;'>このページを追加する</div>"
    html += "</div>"    //id = uselistの終端
    html += "<p class = 'backbutton'>前のページへ戻る&nbsp;<span style = 'font-size:16px;'>↲</span></p>"
    html += "<p class = 'pushbutton'>次のページへ進む&nbsp;<span style = 'font-size:16px;'>↱</span></p>"
    html += "<div id = 'mojichange'><p>文字サイズ変更&nbsp;</p>"
    html += "<div style = 'display:flex; justify-content: space-between;'>"
    html += "<div class = 'smallbutton' style = 'font-size:18px;'>ー</div>"
    html += "<div class = 'bigbutton' style = 'font-size:18px;'>＋</div>"
    html += "</div>"
    html += "</div>"    //id = mojichangeの終端
    html += "</div>"    //id = extensiontypeの終端
    // 拡張機能のhtml文追加
    $("#newhtml").prepend(html);
}

//拡張機能のcss追加
function excssadd() {
    $('#newhtml').css('background', '#005731')
    $('#newhtml').css('color', 'white')
    $('h1').css('border-bottom', '1px solid white');
    $('#extensiontype').css('display', 'flex')
    $('#extensiontype').css('justify-content', 'space-evenly');
    $('#extensiontype').css('font-size', '20px');
    $('#extensiontype').css('text-align', 'center');
}


//Json読み込み
function getJSON(filename) {
    return new Promise(function(r) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', chrome.extension.getURL(filename), true);
        xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                r(xhr.responseText);
            }
        };
        xhr.send();
    });
}
