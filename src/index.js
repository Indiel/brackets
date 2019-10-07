module.exports = function check(str, bracketsConfig) {
    let value = false;
    let arrStr = str.split('');

    function searchBrackets(searchArr) {
        if (!(searchArr.length % 2)) {
            bracketsConfig.forEach(function(arrBracketsConfig) {
                let secondBracket = 1;
                for (let i = 0; i < searchArr.length; i++) {
                    if (arrBracketsConfig[0] == arrBracketsConfig[1] 
                        && secondBracket <= 1 
                        && searchArr[i] == arrBracketsConfig[1]) {
                        secondBracket = 2;
                    } else
                    if (searchArr[i] == arrBracketsConfig[1]) {
                        secondBracket = 1;
                        let arr = [];
        
                        if (i - 1 >= 0) {
                            for (let index = i - 1; index >= 0; index--) {
                                if (searchArr[index] == arrBracketsConfig[0]) {
                                    if (arr.length == 0) {
                                        searchArr.splice(index, 2);
                                        value = true;
                                    } else {
                                        searchArr.splice(index, arr.length + 2);
                                        searchBrackets(arr);
                                    }
                                    i = -1;
                                    index = 0;
                                } else {
                                    arr.unshift(searchArr[index]);
                                }
                            }
                        } else {
                            value = false;
                            break;
                        }
                    }
                }
            });
            if (searchArr.length != 0) {
                value = false;
            }
            return value;
        } else {
            return value;
        }
    }

    return searchBrackets(arrStr);
}