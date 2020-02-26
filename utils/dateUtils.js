/**
 * 
 */
module.exports.earlyMonthYMD = function() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth() + 1)).slice(-2);
    var d = "0" + 1;
    var result = y + "-" + m + "-" + d;
    return result;
}

/**
 *
 */
module.exports.getNowYMD = function() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = ("00" + (dt.getMonth() + 1)).slice(-2);
    var d = ("00" + dt.getDate()).slice(-2);
    var result = y + "-" + m + "-" + d;
    return result;
}