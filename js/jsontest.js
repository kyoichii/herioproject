$(function () {
    $.ajax({ // json読み込み開始
        type: 'GET',
        url: 'http://127.0.0.1/urllink.json',
        dataType: 'json'
    })
        .then(
            function (json) { // jsonの読み込みに成功した時
                console.log('成功');
            },
            function () { //jsonの読み込みに失敗した時
                console.log('失敗');
            }
        );
})
