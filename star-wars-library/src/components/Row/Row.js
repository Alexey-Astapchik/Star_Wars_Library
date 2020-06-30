import React from 'react'

import '../Row/Row.css'

const Row = ({left, right}) => {
    return (
        <div>
            <div className="left_row">
                {left}
            </div>
            <div className="right_row">
                {right}
            </div>
        </div>
    )
}

export default Row;