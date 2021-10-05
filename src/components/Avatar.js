import React from 'react'
import avatar from '../Resourses/kk.jpg'

function Avatar({color, name, paramsImg}) {

    const lettersName1=name.charAt(0)
    const lettersName2=name.charAt(1)

    const params = paramsImg === '' ?   lettersName1+lettersName2 : avatar
    console.log(params)
    
    return (
        <React.Fragment>
            <div
                style={{
                    width: '95px',
                    height: '95px',
                    borderRadius: '100px',
                    marginLeft: '45%',
                    marginBlock: '5%',
                    textAlign: 'center',
                    fontSize: '380%', 
                    backgroundColor: `${color}`,
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    
                }}
            >
                <img 
                    src={params}
                    alt={params}
                    style={{
                        width:'100px',
                        height:'100px',
                        borderRadius:'100px',
                    }} 
                />
            </div>
            
        </React.Fragment>
    )
}

export default Avatar
