import React from 'react'
import Nav from '../nav/Nav'
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import './style.css'

const Hero = () => {
  return (
    <div className="container-fluid hero">
        <Nav/>
        <div className="container d-flex align-items-center justify-content-center">
            <div className="">
                <h1 className='text-center text-white'>Unlimited movies, TV shows, and more</h1>
                <p className='text-center text-white'>Watch anywhere. Cancel anytime.</p>
                <p className='text-center text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="d-flex justify-content-center">
                    <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <a className='btn btn-primary'>Search</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero