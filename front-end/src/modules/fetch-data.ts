export const fetchData = async (url: string, method: string, data?:any): Promise<any> => {
    console.log((data? {body: JSON.stringify(data)}: ''));
    const response = await fetch(url, {
        method: method,
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...(data? {body: JSON.stringify(data)}: '')
    });
    console.log(response);
    const result = await response.json();
    return result;
};