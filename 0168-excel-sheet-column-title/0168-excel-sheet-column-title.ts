function convertToTitle(columnNumber: number): string {
    let title = "";

    while (columnNumber > 0) {
        const remainder = columnNumber % 26;

        if (remainder === 0) {
            title = "Z" + title;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            title = String.fromCharCode(remainder + 64) + title;
            columnNumber = Math.floor(columnNumber / 26);
        }
    }

    return title;
}
