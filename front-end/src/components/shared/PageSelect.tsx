import { FC, useRef } from 'react';
import { PageSelectPropsInterface } from '../../interfaces/props/PageSelectPropsInterface';
import { HiOutlineChevronDoubleLeft, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronDoubleRight } from 'react-icons/hi'
const PageSelect: FC<PageSelectPropsInterface> = ({ dispatchPage, pages, lastPageElements, currentPage }): JSX.Element => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const options = Array.from({length: pages}, (_, index) => {
        return index + 1;
    });
    return (
        <ul 
            className='page-select'>
            <HiOutlineChevronDoubleLeft 
                className='page-select__element page-select__element--image' 
                onClick={() => {dispatchPage({type: 'MIN'})}}/>
            <HiOutlineChevronLeft 
                className='page-select__element page-select__element--image' 
                onClick={() => {dispatchPage({type: 'DECREMENT'})}}/>
            <select 
                className='page-select__element page-select__element--list' 
                value={currentPage} 
                ref={selectRef} 
                onChange={() => { if(selectRef && selectRef.current) dispatchPage({type: 'SET_PAGE', payload: parseInt(selectRef.current.value)})} }>
                {options.map((item) => {
                    return (
                        <option 
                            className='page-select__option'
                            key={item} 
                            value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
            <HiOutlineChevronRight 
                className='page-select__element page-select__element--image' 
                onClick={() => {dispatchPage({type: 'INCREMENT'})}}/>
            <HiOutlineChevronDoubleRight 
                className='page-select__element page-select__element--image' 
                onClick={() => {dispatchPage({type: 'MAX'})}}/>
        </ul>
    )
}

export default PageSelect;