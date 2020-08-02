import React, { useEffect } from 'react'
import coronaPhoto from '../../assets/corona.jpg';
import {connect} from 'react-redux';
import * as action from '../../store/action';
import { getCovidSummary } from '../../store/selectors';

const Homepage = (props) => {
    console.log(props)

    useEffect(() => {
        props.requestCovidSummary()
    }, [])

    return (
       <div>
               <img src={coronaPhoto} alt='corona-virus' className='photo'/>
                   <h1>Cornona Virus</h1>
                   <h3>You want stats? You've come to the right place</h3>
         
       </div>
    )
}

const mapStateToProps = state => {

    return {
        ...state,
        getStats: getCovidSummary(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    requestCovidSummary: () => dispatch(action.requestCovidSummary())
})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
