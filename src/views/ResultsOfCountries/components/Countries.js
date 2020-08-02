import React from 'react'

export default function Countries(props) {

    const listCountries = () => {
        const [allCountries] = props;
        console.log('hererererr')
        return (    
            <div>
                {allCountries.map((item, index) => (
                    <li key={index} item={item}/>
                ))}
            </div>
            )
    }
    return (
        <div>
            {listCountries}
        </div>
    )
}
