var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export function clone(subject) {
    var res = {};
    for (var key in subject) {
        res[key] =
            subject[key] instanceof Object
                ? clone(subject[key])
                : subject[key] instanceof Array
                    ? __spreadArrays(subject[key]) : subject[key] instanceof Date
                    ? new Date(subject.getTime())
                    : subject[key];
    }
    return res;
}
//# sourceMappingURL=clone.js.map