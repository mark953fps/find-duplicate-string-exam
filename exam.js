console.log(removeDuplicateString('STUUDENT'), 'test');

function removeDuplicateString(stringVal) {
    let arrString = stringVal.toUpperCase().split('');
    let tmp = [];
    let result = '';

    for (let i = 1; i <= arrString.length; i++) {
        if (arrString[ i - 1] === arrString[i]) {
            tmp.push(i-1, i);
        } 
    }

    result = arrString.filter((d, i) => !tmp.includes(i)).join('');

    return result;
}