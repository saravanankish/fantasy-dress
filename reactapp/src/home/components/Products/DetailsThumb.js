import React, { Component } from 'react'

export class DetailsThumb extends Component {
    render() {
        const {images} = this.props;
        return (
            <div className="thumb" >
                {
                images.map((img, index) =>(
                    <div className="small-img" key={index}>
                    <img src={img} alt="" key={index} 
                
                    /></div>
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb;