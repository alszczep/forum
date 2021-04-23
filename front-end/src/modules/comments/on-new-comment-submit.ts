import { ActionInterface } from './../../interfaces/ReducerActionInterface';
import { fetchData } from "../fetch-data";

const url = 'https://localhost:5001/api/Comment/add'

export const onNewCommentSubmit = async (event: any, content: string, postId: number, dispatchPage: React.Dispatch<ActionInterface>, getData: any, setComment: React.Dispatch<React.SetStateAction<string>>) => {
    event.preventDefault();
    if(content){
        let result = await fetchData(url, 'POST', {postId: postId, date: '2021-04-10T16:48:37.664Z', content: content});
        if(result){
            await getData();
            dispatchPage({type: 'MAX'});
            setComment('');
        }
    }

}