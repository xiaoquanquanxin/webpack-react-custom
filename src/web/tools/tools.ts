
//  获取token
function getToken() {
    const tokenArr = document.cookie.split("; ");
    // console.log(tokenArr);
    for (let i = 0; i < tokenArr.length; i++) {
        const arr = tokenArr[i].split("=");
        if (arr[0] === "token") {
            return arr[1];
        }
    }
    return "";
}


export {
    getToken
}