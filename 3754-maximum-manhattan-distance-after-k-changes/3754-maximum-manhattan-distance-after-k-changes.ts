function maxDistance(s: string, k: number): number {
    let N = 0, S = 0, E = 0, W = 0;
    let maxDist = 0;
    for (let i = 0; i < s.length; i++){
        const c = s[i];
        if (c === 'N')
            N++;
        if (c === 'S')
            S++;
        if (c === 'E')
            E++;
        if (c === 'W')
            W++;
        const dist = Math.abs(N - S) + Math.abs(E - W) + 2 * k;
        maxDist = Math.max(maxDist, Math.min(dist, i + 1));
    }
    return maxDist;
};