import { FC, useCallback, useEffect, useState } from "react";
import { CategoryInterface } from "../interfaces/CategoryInterface";
import { fetchData } from "../modules/fetch-data";
import Category from "./categories/Category"
import Error from "./shared/Error";
import Loading from "./shared/Loading";

const url = 'https://localhost:5001/api/Categories/all';

const Categories: FC = (): JSX.Element => {
    const [data, setData] = useState<CategoryInterface[] | null>([]);
    const getData = useCallback(async() => {
        setData(await fetchData(url, 'GET'));
    }, []) 
    useEffect(() => {
        getData()
    }, [getData]);
    if(data && data.length > 0)
        return (
            <main 
                className='categories'>
                {
                    data.map((item: CategoryInterface) => {
                        return (
                            <Category 
                                key={item.categoryId} 
                                {...item}/>
                        );
                    })
                }
            </main>
        );    
    if(data === null)
        return (
            <Error/>
        );
    return (
        <Loading/>
    );
}

export default Categories;