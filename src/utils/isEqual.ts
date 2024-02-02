/* eslint-disable no-mixed-operators */
type PlainObject<T = any> = {
    // eslint-disable-next-line no-unused-vars
    [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
    return Array.isArray(value);
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
    return isPlainObject(value) || isArray(value);
}

function isEqual(lhs: PlainObject, rhs: PlainObject) {
    if (lhs === undefined && rhs !== undefined
        || lhs !== undefined && rhs === undefined) return true;
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                // eslint-disable-next-line no-continue
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}
export default isEqual;
