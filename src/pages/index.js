import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/one-page-wonder.scss'
import toastmaster_logo from "../images/toastmaster_logo.jpeg"
import tom from "../images/tom.png"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Douglas Student Toastmaster</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">TOASTMASTER</h1>
          <h2 className="masthead-subheading mb-0">Douglas Student</h2>
          <a href="https://www.meetup.com/Douglas-Toastmasters/events/" className="btn btn-primary btn-xl rounded-pill mt-5">Join us</a>
        </div>
      </div>
      <div className="bg-circle-1 bg-circle"></div>
      <div className="bg-circle-2 bg-circle"></div>
      <div className="bg-circle-3 bg-circle"></div>
      <div className="bg-circle-4 bg-circle"></div>
    </header>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid" src={toastmaster_logo} alt=""></img>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">What we're about...</h2>
              <p>What we're about..What we're about..What we're about..What we're about..What we're about..What we're about..</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={tom} alt=""></img>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">Where are we?!</h2>
              <p>Where are we?!Where are we?!Where are we?!Where are we?!Where are we?!Where are we?!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="img/03.jpg" alt=""></img>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">Free to contact us!</h2>
              <p>Free to contact us!Free to contact us!Free to contact us!Free to contact us!Free to contact us!Free to contact us!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="py-5 bg-black">
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; Your Website 2019</p>
      </div>
    </footer>
  </>
)

export default IndexPage
