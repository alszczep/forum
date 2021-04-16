import { FC, useRef } from 'react';
import { PageSelectPropsInterface } from '../../interfaces/props/PageSelectPropsInterface';
import { TiMediaRewind, TiMediaPlayReverse, TiMediaPlay, TiMediaFastForward } from 'react-icons/ti'

const PageSelect: FC<PageSelectPropsInterface> = ({ dispatchPage, pages, lastPageElements, currentPage }): JSX.Element => {
    const selectRef = useRef<HTMLSelectElement>(null);
    const options = Array.from({length: pages}, (_, index) => {
        return index + 1;
    });
    return (<ul className='pageNumbersWrapper'>
        <TiMediaRewind className='pageNumberButton' onClick={() => {dispatchPage({type: 'MIN'})}}/>
        <TiMediaPlayReverse className='pageNumberButton' onClick={() => {dispatchPage({type: 'DECREMENT'})}}>&lt;</TiMediaPlayReverse>
        <select className='pageList pageNumberButton' value={currentPage} ref={selectRef} 
        onChange={() => { if(selectRef && selectRef.current) dispatchPage({type: 'SET_PAGE', payload: parseInt(selectRef.current.value)})} }>
            {options.map((item) => {
                return (<option key={item} value={item}>{item}</option>);
            })}
        </select>
        <TiMediaPlay className='pageNumberButton' onClick={() => {dispatchPage({type: 'INCREMENT'})}}>&gt;</TiMediaPlay>
        <TiMediaFastForward className='pageNumberButton' onClick={() => {dispatchPage({type: 'MAX'})}}>&gt;&gt;</TiMediaFastForward>
    </ul>)
}

export default PageSelect;