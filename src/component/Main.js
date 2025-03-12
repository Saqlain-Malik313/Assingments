import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaRegPlayCircle } from "react-icons/fa";
import dash from "./logo/dashborad.png"
import logo1 from "./logo/Fictional company logo.png"
import logo2 from "./logo/Fictional company logo (1).png"
import logo3 from "./logo/Fictional company logo (2).png"
import logo4 from "./logo/Fictional company logo (3).png"
import logo5 from "./logo/Fictional company logo (4).png"
import logo6 from "./logo/Fictional company logo (5).png"
import { NavLink } from 'react-router-dom';
import { Row , Col, } from 'react-bootstrap';



const Main = () => {
    return (
        <>
            <div className='container-fluid ' id='main' >
                <div className='center'>
                    <p class="round3"><small class="round2">New feature</small>Check out the team dashboard→</p>
                </div>
                <div className='center'>
                    <h1>Beautiful analytics to grow smarter</h1>
                </div>
                <p className='center'>Powerful, self-serve product and growth analytics to help you convert, engage,
                    and retain more users. Trusted by over 4,000 startups.</p>
                <div className="wrap"><Button veriant="light" variant="light"  id='btn' size="lg" >
                    <a href='https://www.youtube.com/watch?v=Z7Ogq1QhXoI' style={{color:"black", height:"max-content" }} >
                    <FaRegPlayCircle style={{marginBottom:"2px"}}/>Demo</a></Button>
                    <NavLink to='/sign'>
                    <Button variant="danger" id='btn' size="lg">
                        Sign up
                    </Button>
                    </NavLink>
                    
                </div>
                <div className=' center'>
                    <img src={dash} alt={dash} id='dash' width="700" height="300"/>
                </div>
                <div className='center container'> Join 4,000+ companies already growing </div>
                <div className=''>
                    <Row className='cent'>
                        
                        <Col><img src={logo1} alt={logo1} style={{width:"110px",height:"30px"}}/></Col>
                        <Col><img src={logo2} alt={logo2} style={{width:"120px",height:"30px"}}/></Col>
                        <Col><img src={logo3} alt={logo3} style={{width:"120px",height:"30px"}}/></Col>
                        <Col><img src={logo4} alt={logo4} style={{width:"120px",height:"30px"}}/></Col>
                        <Col><img src={logo5} alt={logo5} style={{width:"120px",height:"30px"}}/></Col>
                        <Col><img src={logo6} alt={logo6} style={{width:"120px",height:"30px"}}/></Col>
                        
                    </Row>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Main
