import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Container, List } from "./styles";
import Element from "./Option/Option";
export function Select(_a) {
    var open = _a.open, options = _a.options, state = _a.state, set = _a.set;
    var _b = useState(false), init = _b[0], setInit = _b[1];
    var _c = useState(false), _open = _c[0], _setOpen = _c[1];
    var _d = useState(false), transition = _d[0], setTransition = _d[1];
    var setOpenState = function (state) {
        setTransition(true);
        setTimeout(function () {
            setTransition(false);
            _setOpen(state);
        }, 300);
    };
    useEffect(function () { return setInit(true); }, []);
    useEffect(useCallback(function () {
        if (init) {
            setOpenState(!!open);
        }
    }, [init, open]), [open]);
    var _options = useMemo(function () {
        return options.map(function (option) {
            return typeof option === "string" ? { value: option, display: option } : option;
        });
    }, [options]);
    return (React.createElement(Container, { onClick: function () { return setOpenState(!_open); }, open: _open, transitioning: transition, size: _options.length },
        React.createElement("p", null, state),
        (_open || (!_open && transition)) && (React.createElement(List, null, _options.map(function (o, i) {
            return state !== o.value ? (React.createElement(Element, { key: i, set: set, value: o.value }, o.display)) : null;
        })))));
}
//# sourceMappingURL=Select.js.map