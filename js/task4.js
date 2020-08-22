function formatString(string, maxLength = 40) {
    // Write code under this line
    let stringLength = string.length;
    if (stringLength > maxLength) {
        return string.slice(0, maxLength) + '...';
        
    }
    else if( stringLength = maxLength || stringLength < maxLength ){
        return string;
    } else return string.slice(0, maxLength) + '...';
}


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
'Vestibulum facilisis, purus ne...'