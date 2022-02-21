import React from 'react'

import logo from '../assest/movie.jpeg'
import img1 from '../assest/img1.jpg'
import img2 from '../assest/img2.jpg'
import img3 from '../assest/img3.jpg'
import { Link } from 'react-router-dom'

export const Navbar = (prpos) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" to={{pathname:'/home'}}>
                    <img src={logo} className='rounded-circle' width="30" height="30" className="d-inline-block align-top" alt="" />

                    <span style={{ color: '#ec3737' }}> Movie</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to={{pathname:'/home'}} >Home </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to={{pathname:'/tv-shows'}}>Tv Shows</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to={{pathname:'/movies'}}>Movies</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light" to={{pathname:'/actor'}}>Actor</Link>
                        </li>
                    </ul>

                    <form className="form-inline " style={{backgroundColor:'', width:"50vw"}}>
                        <input style={{width:'100%'}} className="form-control " type="search" placeholder="Search" aria-label="Search" />
                    </form>

                </div>
            </nav>

            {/*  */}

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner " style={{ height: '60vh' }}>
                    <div className="carousel-item active">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={img1}  alt="Card image" />
                            <div className="card-img-overlay">
                                <h1 className=" card-title ">Card title</h1>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={img2} alt="Card image" />
                            <div className="card-img-overlay">
                                <h1 className=" card-title ">Card title</h1>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card bg-dark text-white">
                            <img className="card-img" src={img3} alt="Card image" />
                            <div className="card-img-overlay">
                                <h1 className=" card-title ">Card title</h1>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>

    )
}