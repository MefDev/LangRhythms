export function isEmpty(obj: any): boolean {
    if (obj === null || obj === undefined) return true;

    if (typeof obj === 'string' || Array.isArray(obj)) {
        return obj.length === 0;
    }

    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }

    return false;
}
