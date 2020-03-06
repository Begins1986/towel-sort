
module.exports = function towelSort (matrix) {
  var arr = [];
    if (Array.isArray(matrix)) {
        for (let j = 0; j < matrix.length; j++) {
            if (j % 2 == 0) {
                for (let n = 0; n <= matrix[j].length - 1; n++) {
                    arr.push(matrix[j][n]);
                }
            } else {
                for (let n = matrix[j].length - 1; n >= 0; n--) {
                    arr.push(matrix[j][n]);
                }
            }
        }
        console.log(arr);
        return arr;
    } else {
        console.log(arr);
        return arr;
    }
}
