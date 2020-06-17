import React from 'react'



const Row = ({left, right}) => {
    return (
        <div className="Row">
            <div>
                {left}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

export default Row;