const add = function (x,y) {
    console.log(x + y);
}

const sub = function (x,y) {
    console.log(x - y);
}

module.exports = {
    add: add,
    // add: function (x,y) {
    //     console.log(x + y);
    // },
    sub: sub
}