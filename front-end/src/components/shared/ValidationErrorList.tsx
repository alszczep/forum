import { FC } from "react";

const ValidationErrorList: FC<{errorList: JSX.Element[]}> = ({ errorList }): JSX.Element => {
    return (
        <section 
            className='form__errors'>
            <ul 
                className='form__error-list'>
                {
                    errorList.map(item => item)
                }
            </ul>
        </section>
    )
}

export default ValidationErrorList;