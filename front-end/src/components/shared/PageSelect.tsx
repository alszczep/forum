import { FC, useRef } from 'react';
import { PageStateInterface } from '../../interfaces/PageStateInterface';
import { ActionInterface } from '../../interfaces/ActionInterface';

interface PageSelectPropsInterface extends PageStateInterface{
    dispatchPage: (args: ActionInterface) => void;
}

const PageSelect: FC<PageSelectPropsInterface> = ({ dispatchPage, pages, lastPageElements, currentPage }): JSX.Element => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const pageChange = () => {
        if(selectRef && selectRef.current)
            dispatchPage({type: 'SET_PAGE', payload: parseInt(selectRef.current.value)})
    }
    const options = Array.from({length: pages}, (_, index) => {
        return index + 1;
    });
    return (<ul className='pageNumbersWrapper'>
        <li className='pageNumberButton' onClick={() => dispatchPage({type: 'MIN'})}>&lt;&lt;</li>
        <li className='pageNumberButton' onClick={() => dispatchPage({type: 'DECREMENT'})}>&lt;</li>
        <select className='pageList pageNumberButton' value={currentPage} ref={selectRef} onChange={pageChange}>
            {options.map((item) => {
                return (<option key={item} value={item}>{item}</option>);
            })}
        </select>
        <li className='pageNumberButton' onClick={() => dispatchPage({type: 'INCREMENT'})}>&gt;</li>
        <li className='pageNumberButton' onClick={() => dispatchPage({type: 'MAX'})}>&gt;&gt;</li>
    </ul>)
}

export default PageSelect;