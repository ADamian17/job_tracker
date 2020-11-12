export const truncateString = (str, range ) => {
    range = parseInt(range);

    if ( range >= str.length ) {
        return str;
    }

    const newFormat = str.substr(0, range);
    return `${newFormat}...`;
};

export const formatDate = ( str ) => {
    if ( !str ) return '';
    return new Date( str ).toLocaleDateString();
};

export const parseJwt = ( token ) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map( ( c ) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

