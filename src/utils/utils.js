export function getUID(prefix = 'form') {
    return prefix + '_' + Date.now() / 60 * 60;
}