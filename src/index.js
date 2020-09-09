module.exports = function towelSort(matrix = []) {
    return matrix.reduce((acc, curr, idx) => {
        if (idx % 2 === 0) return acc.concat(curr);
        return acc.concat(curr.reverse());
    }, []);
};
