// -------------------------------
// ①切り分けしたファイルを読み込む
// -------------------------------
let CONST = require('./const/const')
let UTILS = require('./utils/dateUtils')
let AWS = require('aws-sdk');
// -------------------------------

// -------------------------------
// ②メイン処理
// -------------------------------

// 変数定義
let earlymonth = UTILS.earlyMonthYMD()
let currentdate = UTILS.getNowYMD()
let requestParam = CONST.param

// リクエストパラメーター生成
requestParam.TimePeriod.Start = earlymonth
requestParam.TimePeriod.End = currentdate

// リクエスト実行
const promise = new Promise((resolve, reject) => {
    const costexplorer = new AWS.CostExplorer({ region: "us-east-1" });
    costexplorer.getCostAndUsage(requestParam, function (err, data) {
        if (err) {
            // エラーがあった場合は以下★-1のcatchに値が返る
            reject(err)
        }
        // 正常の場合は★-1のthenに値が返る
        resolve(JSON.stringify(data))
    })
})

// ★-1 実行結果
promise.then((result) => {
    // 変数に入れる ←今回の目的 (別に変数に入れなくても引数の[result]だけで使えます)
    let sucess = result
    // -------------------------------
    // 成功時に行いたい処理を記述する
    // -------------------------------

    //出力確認用
    console.log(sucess)
}).catch((e) => {
    // 変数に入れる ←今回の目的 (別に変数に入れなくても引数の[e]だけで使えます)
    let err = e
    // -------------------------------
    // 失敗時に行いたい処理を記述する
    // -------------------------------

    //出力確認用
    console.log(err)
});
// -------------------------------