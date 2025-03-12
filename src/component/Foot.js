import React from 'react'
import { Row , Col} from 'react-bootstrap';


const Foot = () => {
    return (
        <div className='container'>
            <Row className='cent' style={{display:'flex',}}>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Product</h3>
                    <h6>
                        <li><a href='/Overview'>Overview</a></li>
                        <li><a href='/feature'>Feature</a></li>
                        <li><a href='/Solution'>Solution</a></li>
                        <li><a href='/Tutorial'>Tutorial</a></li>
                        <li><a href='/Pricing'>Pricing</a></li>
                        <li><a href='/Releases'>Releases</a></li>
                    </h6>
                </Col>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Company</h3>
                    <h6>
                        <li><a href='/About'>About us</a></li>
                        <li><a href='/Careers'>Careers</a></li>
                        <li><a href='/Press'>Press</a></li>
                        <li><a href='/News'>News</a></li>
                        <li><a href='/Media'>Media kit</a></li>
                        <li><a href='/Contact'>Contact</a></li>
                    </h6>
                </Col>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Resources</h3>
                    <h6>
                        <li><a href='/Blog'>Blog</a></li>
                        <li><a href='/Newsletter'>Newsletter</a></li>
                        <li><a href='/Event'>Event</a></li>
                        <li><a href='/Help'>Help center</a></li>
                        <li><a href='/Tutorials'>Tutorials</a></li>
                        <li><a href='/Support'>Support</a></li>
                    </h6>
                </Col>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Use cases</h3>
                    <h6>
                        <li><a href='/Startup'>Startup</a></li>
                        <li><a href='/Enterprise'>Enterprise</a></li>
                        <li><a href='/Goverment'>Goverment</a></li>
                        <li><a href='/Saas'>Saas center</a></li>
                        <li><a href='/MarketPlaces'>Market</a></li>
                        <li><a href='/Ecommerce'>Ecommerce</a></li>
                    </h6>
                </Col>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Social</h3>
                    <h6>
                        <li><a href='/Twitter'>Twitter</a></li>
                        <li><a href='/Linkedin'>Linkedin</a></li>
                        <li><a href='/Facebook'>Facebook</a></li>
                        <li><a href='/GitHub'>GitHub </a></li>
                        <li><a href='/AngelList'>AngelList</a></li>
                        <li><a href='/Dribble'>Dribble</a></li>
                    </h6>
                </Col>
                <Col className=''>
                    <h3 style={{marginLeft:'20px'}}>Legal</h3>
                    <h6>
                        <li><a href='/terms'>Terms</a></li>
                        <li><a href='/Privacy'>Privacy</a></li>
                        <li><a href='/Cookies'>Cookies</a></li>
                        <li><a href='/Licenses'>Licenses </a></li>
                        <li><a href='/Settings'>Settings</a></li>
                        <li><a href='/Contact'>Contact</a></li>
                    </h6>
                </Col>
            </Row>
            <hr style={{border:"1px solid "}}/>
        </div>
    )
}

export default Foot
