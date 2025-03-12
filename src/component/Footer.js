import React from 'react'
import Button from 'react-bootstrap/Button';
import Foot from './Foot';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='container-fluid' style={{ paddingTop: "10px" }}>
                <div className='container-fluid00 bg-body-tertiary' style={{ backgroundcolor: "grey", width: "100%", height: '150%', borderRadius: "10px" }}>
                    <div className='center'>
                        <h1>Start your free trail</h1>
                    </div>
                    <p className='center'>Powerful, self-serve product and growth analytics to help you convert, engage,
                        and retain more users. Trusted by over 4,000 startups.</p>
                    <div className='center container-fluid' style={{paddingBottom:"30px"}}>
                        <div className="wrap container-fluid ">
                            <Button variant="light" id='btn' size="lg" style={{ borderRadius: "5px",border:" .2 px black solid", color:"black" }}>
                              <a href='https://www.geeksforgeeks.org/software-engineering-introduction-to-software-engineering/' style={{color:"black",}}>
                             Learn more </a>
                            </Button>
                            <NavLink to='/stared'>
                            <Button variant="danger" id='btn' size="lg" style={{ borderRadius: "5px",  }}>
                                Get started
                            </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Foot/>
        </>
    )
}

export default Footer
