const word = '안녕하세요.'
const maxColumn = word.length + 1;
const maxRow = word.length

const recursive = (row, currentColumn) => {
    if(row.length === maxColumn){
        return row;
    }

    row += word.charAt(currentColumn % word.length);
    return recursive(row, ++currentColumn);
}

for(let i = 0; i < maxRow; i++){
    const row = recursive('', i);
    console.log(row);
}