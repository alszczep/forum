import { FC, useCallback, useEffect, useState } from "react";
import { CategoryInterface } from "../interfaces/CategoryInterface";
import { fetchData } from "../modules/fetch-data";
import SingleCategory from "./categories/SingleCategory"
import Loading from "./shared/Loading";

const url = 'https://localhost:5001/api/Categories/all';

const Categories: FC = (): JSX.Element => {
    const [data, setData] = useState<CategoryInterface[]>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET'));
      }, []) 
    useEffect(() => {
        getData()
    }, [getData]);
    
    if(data && data.length > 0)
        return (<main className='mainPage'>
            {data.map((item: CategoryInterface) => {
                return (
                    <SingleCategory key={item.categoryId} {...item}/>
                );
            })}
        </main>);    
    return (<Loading/>);
}

export default Categories;