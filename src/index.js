/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let visits = [];
    let k = 1;

    function loopIn(ind) {
        if (ind !== preferences[ind] - 1) {
            if (!visits[preferences[ind] - 1]) {
                if (visits[ind] !== -1) {
                    visits[ind] = -2;
                }
                if (loopIn(preferences[ind] - 1)) {
                    visits[ind] = k;
                    return true;
                } else {
                    visits[ind] = 0;
                }
            } else {
                if (visits[preferences[ind] - 1] === -1) {
                    if ((preferences[preferences[ind] - 1] - 1 !== ind)) {
                        visits[ind] = k;
                        return true;
                    }
                }
            }
        }
    }

    for (let i = 0; i < preferences.length; i++) {
        if (!visits[i] && preferences[i]) {
            visits[i] = -1;
            if (loopIn(i)) {
                k++;
            } else {
                visits[i] = 0;
            }
        } else {
            if (!preferences[i]) {
                visits[i] = -2;
            }
        }
    }
    return k - 1;
};
