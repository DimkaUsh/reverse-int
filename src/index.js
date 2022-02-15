module.exports = function reverse (n) {
    let str = String(n)
    let result = ''
    for (let i = str.length - 1; i > -1  ; i-- ) {
        if (str[i] != '-') {result += str[i]}
    }


  return Number(result) 
}
