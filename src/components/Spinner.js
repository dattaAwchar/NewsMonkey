import React, { Component } from 'react'
import loadingGif from './loadingGif.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img className='my-3' src={loadingGif} alt="Loading..." />
            </div>
        )
    }
}

export default Spinner
