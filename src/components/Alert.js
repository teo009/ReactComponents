import React from 'react'

function Alert({color='#8FBC8F', fontColor='#0f3d0f', text='Default Alert'}) {
    //console.log(color)
    return (
        <React.Fragment>
            <div
                style={{
                    backgroundColor: `${color}`,
                    color: `${fontColor}`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    borderRadius: '4px',
                    padding: '10px 10px',
                    margin: '13px'
                }}
            >
                {text}
            </div>
        </React.Fragment>
    )
}

export default Alert

