function isMatch(s: string, p: string): boolean {
    function match(i: number, j: number): boolean {
        // Pattern finished
        if (j === p.length) {
            return i === s.length;
        }

        // Does the current character match?
        const currentMatch =
            i < s.length && (s[i] === p[j] || p[j] === '.');

        // If next character is '*'
        if (j + 1 < p.length && p[j + 1] === '*') {

            // Option 1: '*' matches zero occurrences
            if (match(i, j + 2)) {
                return true;
            }

            // Option 2: '*' matches one or more occurrences
            if (currentMatch && match(i + 1, j)) {
                return true;
            }

            return false;
        }

        // No '*'
        if (currentMatch) {
            return match(i + 1, j + 1);
        }

        return false;
    }

    return match(0, 0);
}