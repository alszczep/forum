import { fetchData } from "../fetch-data";

const url = 'https://localhost:5001/api/Post/add'

export const onNewThreadSubmit = async (event: any, categoryId: number, title: string, content: string, history:any) => {
    event.preventDefault();
    if(title && content){
        let result = await fetchData(url, 'POST', {categoryId: categoryId, date: '2021-04-10T16:48:37.664Z', title: title, context: content});
        console.log('result: ', result);
        if(result)
            history.push(`/comments/${result}`);
    }
}