export const fetchData = async (url: string, data?:any): Promise<any> => {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin'
    });
    const result = await response.json();
    return result;
};