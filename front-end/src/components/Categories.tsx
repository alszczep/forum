import { FC, useCallback, useEffect, useState } from "react";
import { CategoryInterface } from "../interfaces/CategoryInterface";
import { fetchData } from "../modules/fetch-data";
import SingleCategory from "./categories/SingleCategory"

const url = 'https://localhost:44384/api/Categories/all';

const Categories: FC = (): JSX.Element => {
    const [data, setData] = useState<CategoryInterface[]>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(url));
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
    return (<main className='mainPage'>
        loading
    </main>)
}

export default Categories;