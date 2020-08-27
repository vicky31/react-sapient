import React from 'react';
import './Filters.css';

const allButtons = (selectYear, selectedYear) => {
    const currentYear = new Date().getFullYear();
    const buttons = []
    for (let i = 2006; i <= currentYear; i++) {
        buttons.push(
            <div className='button'>
                <div
                    className={`button-item ${selectedYear === i ? 'selected' : ''}`}
                    onClick={() => { selectYear('year', i) }}
                >{i}</div>
            </div>
        )
    }
    return buttons;
}

const booleanButtons = (type, selectedFilter, selected) => {

    return [
        <div className='button'>
            <div
                className={`button-item ${selected === true ? 'selected' : ''}`}
                onClick={() => { selectedFilter(type, true) }}
            >
                True
            </div>
        </div>,
        <div className='button'>
            <div
                className={`button-item ${selected === false ? 'selected' : ''}`}
                onClick={() => { selectedFilter(type, false) }}
            >
                False
            </div>
        </div>
    ];
}
const Filters = (props) => {
    const { selectedYear, selectedFilter, launch, landing } = props;
    return (
        <div className="filter-wrapper">
            <div className='filter-cover'>
                <div className="filter-heading">Filters</div>
                <div className="filter-container">
                    <div className="filter-title">Launch Year</div>
                    <div className="buttons-wrapper">
                        {
                            allButtons(selectedFilter, selectedYear)
                        }
                    </div>
                </div>
                <div className="filter-container">
                    <div className="filter-title">Successful Launch</div>
                    <div className="buttons-wrapper">
                        {
                            booleanButtons('launch', selectedFilter, launch)
                        }
                    </div>
                </div>
                <div className="filter-container">
                    <div className="filter-title">Successful Landing</div>
                    <div className="buttons-wrapper">
                        {
                            booleanButtons('landing', selectedFilter, landing)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters;