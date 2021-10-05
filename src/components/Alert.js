import React from 'react'

function Alert({color, fontColor, text, alertStatus}) {

    const alertText = alertStatus === 'Default' ? text : text="Success Alert"
    const alertColor = alertStatus === 'Default' ? color : color="#8FBC8F"
    
    return (
        <React.Fragment>
            <div
                style={{
                    backgroundColor: `${alertColor}`,
                    color: `${fontColor}`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    borderRadius: '4px',
                    padding: '10px 10px',
                    margin: '13px'
                }}
            >
                {alertText}
            </div>
        </React.Fragment>
    )
}

export default Alert

