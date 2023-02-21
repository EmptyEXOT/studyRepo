type Mods = Record<string, boolean | string>;

function filterClassName(cls: string): string {
    // removes spaces and create class substrings array
    const res: Array<string> = cls.trim().split(/\s+/);
    // camelCase naming filter
    res.forEach((part, index) => {
        if (index === 0) {
            res[index] = part.charAt(0).toLowerCase() + part.slice(1);
        } else {
            res[index] = part.charAt(0).toUpperCase() + part.slice(1);
        }
    });
    // joins class substrings and return
    return res.join('');
}

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    const classes = new Set<string>();
    const result: Array<string> = [];
    if (cls.length) classes.add(filterClassName(cls));
    additional.filter(Boolean).forEach((additional) => {
        classes.add(filterClassName(additional));
    });
    Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .forEach(([cls]) => {
            classes.add(filterClassName(cls));
        });
    classes.forEach((cls) => {
        result.push(cls);
    });
    return result.join(' ');
}
