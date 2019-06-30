interface ParsedQueryParams {
    [key: string]: string;
}

export function parseQuery(queryString: string): ParsedQueryParams {
    const query: ParsedQueryParams = {};
    const pairs = (queryString[0] === '?'
        ? queryString.substr(1)
        : queryString
    ).split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        query[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return query;
}
