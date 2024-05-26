import React, { Component } from 'react';

class WebBox extends Component {
    render() {
        const { name } = this.props; // Get the name prop
        return (
            <div className='m-5' style={{ width: '300px', height: '300px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ color: 'white', fontSize: '24px' }}>{name}</span>
            </div>
        );
    }
}

export default class Part4 extends Component {
    render() {
        return (
            <div className='d-flex justify-content-around p-5'>
                <div>
                    <WebBox name="Web design" />
                    <WebBox name="Mobile design" />
                    <WebBox name="Logo design" />
                </div>
                <div>
                    <WebBox name="Web application developer" />
                    <WebBox  name="Mobile application developer" />
                    <WebBox name="PWA developer" />
                </div>
            </div>
        );
    }
}
