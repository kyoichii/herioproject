
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
    //モーダルウインドウhtmlのcss
    modalcss();
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
        mojichange(1);
        $('#overlay, .modal-window').fadeIn();
    });
    //マイナスボタン処理
    $('.smallbutton').on('click', function () {
        mojichange(2);
    });
})

//閉じるjQuery
$(function () {
    $('.js-close').click(function () {
      $('#overlay, .modal-window').fadeOut();
    });
  });

// //本体に拡張機能の要素を追加
function cssadd() {
    $("#newhtml").css('position', 'fixed')
    $("#newhtml").css('width', '100%')
    $("#newhtml").css('z-index', '9999')
}

//拡張機能のhtml追加
function htmladd() {
    var html = "<h1>Sylvanian Extension</h1>"
    html += "<div id = 'extensiontype'>"
    html += "<p id = 'usemenu'>よく使うもの</p>"
    html += "<p class = 'backbutton'>前のページへ戻る&nbsp;<span style = 'font-size:16px;'>↲</span></p>"
    html += "<p class = 'pushbutton'>次のページへ進む&nbsp;<span style = 'font-size:16px;'>↱</span></p>"
    html += "<div id = 'mojichange'><p>文字サイズ変更&nbsp;</p>"
    html += "<div style = 'display:flex; justify-content: space-between;'>"
    html += "<div class = 'smallbutton' style = 'font-size:18px;'>ー</div>"
    html += "<div class = 'bigbutton' style = 'font-size:18px;'>＋</div>"
    html += "</div>"
    html += "</div>"    //id = mojichangeの終端
    html += "<p id = 'rireki'>履歴</p>"
    html += "</div>"    //id = extensiontypeの終端
    //モーダルウィンドウの追加部分
    html += "<div class='modal-window'>"
    html += ""
    html += "<button class='js-close button-close'>閉じる</button>"
    html += "</div>"
    //オーバーレイの追加部分
    //hmtl += "<div id='overlay' class='overlay'></div>"
    // 拡張機能のhtml文追加
    $("#newhtml").prepend(html);
}

//拡張機能のcss追加
function excssadd() {
    $('#newhtml').css('background', '#005731')
    $('#newhtml').css('color', 'white')
    $('h1').css('border-bottom', '1px solid white');
    $('#extensiontype').css('display','flex')
    $('#extensiontype').css('justify-content', 'space-evenly');
    $('#extensiontype').css('font-size', '20px');
    $('#extensiontype').css('text-align', 'center');
}

//モーダルウインドウのcss追加
function modalcss(){
    $('.modal-window').css('display', 'none');
    $('.modal-window').css('position', 'fixed');
    $('.modal-window').css('top','50%');
    $('.modal-window').css('left', '50%');
    $('.modal-window').css('transform', 'translate(-50%, -50%)');
    $('.modal-window').css('width', '300px');
    $('.modal-window').css('height', '300px');
    $('.modal-window').css('background-color', '#dfdddd');
    $('.modal-window').css('border-radius', '5px');
    $('.modal-window').css('z-index', '11');
    $('.modal-window').css('padding', '2rem');
    //閉じるボタン
    $('.button-close').css('position', 'absolute');
    $('.button-close').css('top', '50%');
    $('.button-close').css('left', '50%');
    $('.button-close').css('transform', 'translate(-50%, -50%)');
    $('.button-close').css('width', '200px');
    $('.button-close').css('padding', '1em');
    $('.button-close').css('background-color', '#c96931');
    $('.button-close').css('color', '#eaeaea');
    $('.button-close').css('border-radius', '20rem');
    $('.button-close').css('cursor', 'pointer');
    /*オーバーレイ
    $('.overlay').css('display', 'none');
    $('.overlay').css('position', '');
    $('.overlay').css('top', '0');
    $('.overlay').css('left', '0');
    $('.overlay').css('background-color', 'rgba(0, 0, 0, 0.5)');
    $('.overlay').css('width', '100%');
    $('.overlay').css('height', '100%');
    $('.overlay').css('z-index', '10');
    */
}
