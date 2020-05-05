export function map(data, Component) {
    return (data &&
        Object.entries(data).map(function (_a, key) {
            var name = _a[0], value = _a[1];
            return Component({ key: key, name: name, value: value });
        }));
}
//# sourceMappingURL=mapIntoComponents.js.map