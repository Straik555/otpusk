// Core
import React from 'react';

const Airplane = ({list, keyword}) => {
    const filtersAir =list.sort((a, b) => {
            let dateA=new Date(a.date)
            let dateB=new Date(b.date)
            return dateA - dateB
        })
    const searchedList = keyword => categories => {
        const filterName = categories.company.name.toLowerCase().includes(keyword)
        const filterAlternative = categories.company.alternativeNames.some(k => k.toLowerCase().includes(keyword))
        return filterName ? filterName : filterAlternative

    }
    return (
        <div className={'mt-5'}>
            {
                filtersAir.filter(searchedList(keyword)).map((item, id) => (
                    <div
                        key={id}
                        className={
                            'alert alert-info ' +
                            'justify-content-between ' +
                            'align-items-center'
                        }
                    >
                        {item.company.name}
                        <span
                            className={'float-right '}
                        >
                            {item.date}
                        </span>

                    </div>
                ))
            }
        </div>
    )
}


export default Airplane;