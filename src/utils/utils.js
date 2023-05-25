export function getUID(prefix = 'form') {
    return prefix + '_' + Date.now() / 60 * 60;
}

export function isValidURL(url) {
    if (url === '') {
        return false;
    }

    if (!url.includes('http://') && !url.includes('https://')) {
        return false;
    }

    return url.length > 7;
}

export function showURLLink(url) {
    return url.replace('http://', '').replace('https://', '');
}