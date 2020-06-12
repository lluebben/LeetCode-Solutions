var isAnagram = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            let idx = t.indexOf(s[i]);
            t = t.slice(0, idx) + t.slice(idx + 1);
        }
    }

    return !t.length;
};