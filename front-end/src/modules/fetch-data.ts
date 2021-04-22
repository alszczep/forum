export const fetchData = async (url: string, method: string, data?:any): Promise<any> => {
    console.log((data? {body: JSON.stringify(data)}: ''));
    try{
        const response = await fetch(url, {
            method: method,
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(data? {body: JSON.stringify(data)}: '')
        });
        console.log(response);
        const result = await response.json();
        console.log(result);
        return result;
    }catch(error){
        console.log('fetch error', error);
        return null;
    }
};