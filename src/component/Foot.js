import React from 'react'

const Foot = () => {
    return (
        <div className='container'>
            <div className='row' style={{display:'flex'}}>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Product</h3>
                    <h6>
                        <li><a href='/'>Overview</a></li>
                        <li><a href='#Feature'>Feature</a></li>
                        <li><a href='/'>Solution</a></li>
                        <li><a href='/'>Tutorial</a></li>
                        <li><a href='/'>Pricing</a></li>
                        <li><a href='/'>Releases</a></li>
                    </h6>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Company</h3>
                    <h6>
                        <li><a href='/'>About us</a></li>
                        <li><a href='/'>Careers</a></li>
                        <li><a href='/'>Press</a></li>
                        <li><a href='/'>News</a></li>
                        <li><a href='/'>Media kit</a></li>
                        <li><a href='/'>Contact</a></li>
                    </h6>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Resources</h3>
                    <h6>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Newsletter</a></li>
                        <li><a href='/'>Event</a></li>
                        <li><a href='/'>Help center</a></li>
                        <li><a href='/'>Tutorials</a></li>
                        <li><a href='/'>Support</a></li>
                    </h6>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Use cases</h3>
                    <h6>
                        <li><a href='/'>Startup</a></li>
                        <li><a href='/'>Enterprise</a></li>
                        <li><a href='/'>Goverment</a></li>
                        <li><a href='/'>Saas center</a></li>
                        <li><a href='/'>MarketPlaces</a></li>
                        <li><a href='/'>Ecommerce</a></li>
                    </h6>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Social</h3>
                    <h6>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Linkedin</a></li>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>GitHub </a></li>
                        <li><a href='/'>AngelList</a></li>
                        <li><a href='/'>Dribble</a></li>
                    </h6>
                </div>
                <div className='col-lg-2 col-sm-6'>
                    <h3 style={{marginLeft:'20px'}}>Legal</h3>
                    <h6>
                        <li><a href='/'>Terms</a></li>
                        <li><a href='/'>Privacy</a></li>
                        <li><a href='/'>Cookies</a></li>
                        <li><a href='/'>Licenses </a></li>
                        <li><a href='/'>Settings</a></li>
                        <li><a href='/'>Contact</a></li>
                    </h6>
                </div>
            </div>
            <hr style={{border:"1px solid "}}/>
        </div>
    )
}

export default Foot