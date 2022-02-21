import React, { useState } from 'react'
import img2 from '../assest/img2.jpg'
import img3 from '../assest/img3.jpg'


export const BestMovie = (props) => {
    const [best, setBest] = useState([1, 1, 1, 1, 11, 1, 1, 1, 11, 1, 1, 1, 11, 1, 1, 1, 11, 1, 1, 1, 1])

    const [category, setCategory] = useState([1, 1, 1, 1, 1, 11, 11, 11, 11])

    return (
        <>
            <div style={{ 'width': '90%', margin: 'auto' }}>



                <h5 style={{ color: 'white', marginTop: '20px' }}>Popular Movie</h5>

                <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>

                    {
                        best.map((movie, index) => {
                            return (
                                <div key={index} style={{ color: 'white', height: "45vh", width: '15vw', display: 'inline-block', margin: '0px 20px' }} >
                                    <img className="card-img-top h-50" src={img2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontFamily: 'bold' }}>Movie name</h5>
                                        <p className="card-text">rate:3.5</p>
                                        <a href="#" className="btn btn-block btn-outline-danger">watch</a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                {/*  */}
                <h5 style={{ color: 'white', marginTop: '20px' }}>TV Shows</h5>

                <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>

                    {
                        best.map((movie, index) => {
                            return (
                                <div key={index} style={{ color: 'white', height: "45vh", width: '15vw', display: 'inline-block', margin: '0px 20px' }} >
                                    <img className="card-img-top h-50" src={img2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontFamily: 'bold' }}>Movie name</h5>
                                        <p className="card-text">rate:3.5</p>
                                        <a href="#" className="btn btn-block btn-outline-danger">watch</a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {/*  */}

                <h5 style={{ color: 'white', marginTop: '20px' }}>Category</h5>

                <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>


                    {
                        category.map((movie, index) => {
                            return (
                                <div key={index} style={{ color: 'white', height: "auto", width: '15vw', display: 'inline-block', margin: '0px 20px' }} >
                                    <img className="card-img-top h-50" src={img3} alt="Card image cap" />
                                    <div className="card-body">
                                        <a href="#" className="btn btn-block btn-outline-danger">AAction</a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}