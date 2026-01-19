function myAtoi(s: string): number {
    let i = 0;
    let sign = 1;
    let result = 0;

    // skip spaces
    while (i < s.length && s[i] === " ") i++;

    // check sign
    if (s[i] === "-" || s[i] === "+") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    // read digits
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i].charCodeAt(0) - 48);
        i++;
    }
    result*=sign;
    if(result>Math.pow(2,31)-1)
        result=Math.pow(2,31)-1;
    if(result<-Math.pow(2,31))
        result=-Math.pow(2,31);
    return result;
}
