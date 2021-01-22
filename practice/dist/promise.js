"use strict";
function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof value === "string") {
                resolve(`入力値：${value}`);
            }
            else {
                reject("文字ではなく数値です。");
            }
        }, 600);
    });
}
asyncProcess("aiueo").then((response) => {
    console.log(response);
    return asyncProcess(111).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(`エラー；${error}`);
});
