import React, { useCallback, useMemo, useContext } from "react";
import { Config as Configuration } from "../DevTools";
import { ThemeContext } from "styled-components";
import { themes } from "../../json";
import { Header as Element, Options, Icons, Names, Input, Title, } from "./styles";
import { Pin, Add, Palette } from "./styles/icons";
var actions = {
    13: function (e, Theme, Config) {
        return Theme.Add(e.target.value, {}) && Config.set("addingTheme", false)();
    },
};
export default function Header() {
    var Config = useContext(Configuration);
    var _a = useContext(ThemeContext), DevTools = _a.DevTools, ToggleDevTools = _a.ToggleDevTools, For = _a.For;
    var Theme = For("DevTools");
    var handler = useCallback(function (e) { return actions[e.keyCode] && actions[e.keyCode](e, Theme, Config); }, [Theme, Config]);
    var names = useMemo(function () {
        return themes.map(function (name, index) { return (React.createElement("p", { onClick: function () { return Theme.Use(name); }, key: index, className: String(Theme.Name !== name && "Damp") }, name)); });
    }, [Theme]);
    return (React.createElement(Element, null,
        React.createElement(Title, { onClick: Theme.Switch, onDoubleClick: ToggleDevTools },
            React.createElement(Palette, null),
            " ",
            Theme.Name),
        DevTools && (React.createElement(React.Fragment, null,
            React.createElement(Options, null,
                React.createElement(Icons, null,
                    React.createElement(Pin, { onClick: ToggleDevTools }),
                    React.createElement(Add, { rotate: Config.addingTheme || undefined, onClick: Config.toggle("addingTheme") })),
                React.createElement(Names, null, names)),
            Config.addingTheme && React.createElement(Input, { onKeyUp: handler, autoFocus: true }),
            React.createElement("hr", null)))));
}
//# sourceMappingURL=Header.js.map