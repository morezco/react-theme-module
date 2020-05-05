export function differs(obj1, obj2) {
    for (var key in obj1) {
        if (!obj2[key] || obj2[key] !== obj1[key]) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=differs.js.map