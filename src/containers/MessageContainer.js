import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../actions/index'
import Messege from '../components/Message'

class MessageContainer extends Component {
    render() {
        let {message} = this.props
        return (
            <Messege message={message}></Messege>
        );
    }

}

const mapStateToProps = (state)=>{
    return{
        message : state.message
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (MessageContainer);