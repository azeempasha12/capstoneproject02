var minAddToMakeValid = function(s) {
    let open = 0, close = 0;

    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open++;
    }
    return open + close;
};
