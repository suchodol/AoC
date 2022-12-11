var items = input.split('\n\n').map(x => x.split('\n'));
var result = items.reduce((acc, cur) => {
    const sum = cur.reduce((a, c) => +a + +c, 0);
    return acc > sum ? acc : sum;
}  , 0)
console.log(result);
