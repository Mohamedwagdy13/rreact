import React, { Component } from 'react';
import '../component/css.css';

export default class Part3 extends Component {
    render() {
        return (
            <>
                <div className='bg-dark text-light p-5'>
                    <div className='w-75 m-auto'>
                        <h2 className='text-center'>Skills</h2>
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut lorem et tellus ullamcorper molestie. Integer scelerisque, nisl eget tincidunt feugiat, ipsum eros hendrerit odio, nec condimentum nunc libero sit amet nisl. Nunc at arcu consequat, lacinia leo ac, molestie lacus. Nulla facilisi. Sed dapibus est id libero malesuada, eget dapibus libero congue. Nulla tincidunt sit amet velit vel egestas. Sed tempus malesuada ultricies. Vivamus id arcu vel est aliquet blandit ut vitae elit. Sed efficitur dolor vel malesuada eleifend. Vivamus id risus tortor. Sed tincidunt feugiat sodales. Vivamus a eros sed neque luctus sollicitudin. Integer et libero varius, volutpat metus non, eleifend elit. Curabitur vitae felis sit amet lacus volutpat vehicula. Sed nec metus ac metus posuere tempor.
                        </small>
                        <br/>
                    </div>
                    <br/>
                    <br/>

                    <div className='container'>
                        <div className='row '>
                            <div className='col-md-6'>
                                <div className='mt-5 ms-5'>
                                    <strong>My focus</strong><br />
                                    <ol className='list-unstyled'>
                                        <li>UI/UX design</li>
                                        <li>Responsive design</li>
                                        <li>Web design</li>
                                        <li>Mobile app design</li>
                                    </ol>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">Html</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">Css</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">JavaScript</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">React</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">Design</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-light disabled" type="button">Mobile app</button>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
