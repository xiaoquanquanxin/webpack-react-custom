export default (ms: number) => setInterval(function () {
    console.clear();
    console.log(new Date().getSeconds())
}, ms);

