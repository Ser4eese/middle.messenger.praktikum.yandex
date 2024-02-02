export type StringIndexed = Record<string, any>;

export function queryStringify(data: StringIndexed): string | never {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        const value = data[key];
        const endLine = index < keys.length - 1 ? '&' : '';

        if (Array.isArray(value)) {
            const arrayValue = value.reduce<StringIndexed>(
                (val, arrData, idx) => ({
                    ...val,
                    [`${key}[${idx}]`]: arrData,
                }),
                {},
            );

            return `${result}${queryStringify(arrayValue)}${endLine}`;
        }

        if (typeof value === 'object') {
            const objValue = Object.keys(value || {}).reduce<StringIndexed>(
                (res, objKey) => ({
                    ...res,
                    [`${key}[${objKey}]`]: res[objKey],
                }),
                {},
            );

            return `${result}${queryStringify(objValue)}${endLine}`;
        }

        return `${result}${key}=${value}${endLine}`;
    }, '');
}

export default queryStringify;
