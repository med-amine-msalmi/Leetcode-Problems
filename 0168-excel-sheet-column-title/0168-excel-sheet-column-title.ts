function convertToTitle(columnNumber: number): string {
    let title = "";
    // map={ 1:A,  26:Z}

    while (columnNumber > 0) {
       let remainder=columnNumber % 26; 
       if(remainder ==0){
            title="Z"+title
            columnNumber--
       }
        else {
            title=String.fromCharCode(64+remainder)+title }
        columnNumber=Math.floor(columnNumber/26)
    }
    return title;
}

// remainder === 0 donc Z 
// 