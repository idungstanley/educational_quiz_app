export const cl = (...classes: Array<string | undefined | boolean | null | Record<string, unknown>>): string =>
    classes
        .map((i) =>
            !i ? '' : typeof i === 'string' ? i : typeof i === 'object' && !!Object.values(i)[0] ? Object.keys(i)[0] : ''
        )
        .filter(Boolean)
        .join(' ');
