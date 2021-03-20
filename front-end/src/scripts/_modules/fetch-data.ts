export const fetchData = async (url: string, data?:any): Promise<any> => {
    const response = await fetch(url, {
        credentials: 'include'
    });
    const result = await response.json();
    return result;
};

