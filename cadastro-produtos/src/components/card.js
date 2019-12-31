import React from 'react'

export default (props) => (
    <div className="card">
        <div className="card-header">
            {props.header}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)
