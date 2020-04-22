var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
export function useTheme(component, config) {
    component = component.toLowerCase();
    var _a = useContext(ThemeContext), Themes = _a.Themes, For = _a.For;
    var Theme = For(component);
    useEffect(function () {
        Theme.Add(component, config || {});
        return function () { return Theme.Remove(component); };
        // eslint-disable-next-line
    }, [Theme.Name]);
    return __assign(__assign({}, Theme), { Themes: Themes });
}
//# sourceMappingURL=useTheme.js.map