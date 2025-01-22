import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsLightningChargeFill,BsLightningCharge } from "react-icons/bs";
import { LuMessageCircle, LuSquareArrowOutUpRight,LuMessageCircleHeart} from "react-icons/lu";
import { FaVectorSquare } from "react-icons/fa6";
import { TfiCommentsSmiley } from "react-icons/tfi";
import CardGroup from 'react-bootstrap/CardGroup';
import profile2 from "./logo/circle-profile-pic.jpg"
import Toggle from './Toggle';
import men from './logo/men.png';
import women from './logo/women.png'
import womenn from './logo/womenn.png'

const Feature = () => {
    return (
        <>
            <div className='container-fluid' id='Feature'>
                <div className='center'>
                    <p id='feature'>Feature</p>
                </div>
                <div className='center'>
                    <h1>Analytics that feel like it's from the future</h1>
                </div>
                <p className='center'>Powerful, self-serve product and growth analytics to help you convert, engage,
                    and retain more users. Trusted by over 4,000 startups.</p>
                <div className='center'>
                    <CardGroup className=''>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><LuMessageCircle id='icon'/></div>
                                <Card.Title id='title'> Share team inboxes</Card.Title>
                                <Card.Text>
                                Whether you have a team of 2 or 200, cur shared team
                                Inboxes keep everyone on the same page and in the loop.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><BsLightningCharge id='icon' /></div>
                                <Card.Title id='title'>Deliver instant answers</Card.Title>
                                <Card.Text>
                                An ad-in-one customer service platform that heips you balance everything
                                your customers need to be happy.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><LuSquareArrowOutUpRight id='icon' /></div>
                                <Card.Title id='title'>Manage your team with reports</Card.Title>
                                <Card.Text>
                                Measure what matters with Untitled's easy-to-use reports. You can filter, export,
                                and arlldowe on the data in a couple slickis.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </CardGroup>
                </div>
                <div className='center'>
                    <CardGroup className=''>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><TfiCommentsSmiley id='icon' /></div>
                                <Card.Title id='title'>Connect with customers</Card.Title>
                                <Card.Text>
                                Solve a problem or close a sale in real-time with chat if no one is available,
                                customers are saarmlessly routed to email without confusion.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><FaVectorSquare id='icon' /></div>
                                <Card.Title id='title'>Connect the tools you already use.</Card.Title>
                                <Card.Text>
                                Explore 100+ Integrations that make your cay-to-clay wonitiow more efficient and familiar Plus,
                                 our extensive developer tools,
                                </Card.Text>
                            </Card.Body>                            
                        </Card>
                        <Card id='Card'>
                            <Card.Body>
                                <div className='center'><LuMessageCircleHeart id="icon" /></div>
                                <Card.Title  id='title'>Our people make the difference</Card.Title>
                                <Card.Text>
                                We're an extension of your customer service team and all of our resources are free:
                                Chat to our friendly team 24/7 when you need hals.
                                </Card.Text>
                            </Card.Body>
                            
                        </Card>
                    </CardGroup>
                </div>
                <div className='bg-body-tertiary' style={{height:"auto"}}>
                    <div className='center'>
                        <BsLightningChargeFill id='light'/> <span>Sisyphus</span>
                    </div>
                    <div className='center'>
                        <h1>We've been using Untitled to kick start every new project and can't imagine working without it.</h1>
                    </div>
                    <div className='center'>
                    <img src={profile2} alt={profile2} id='d-flex2'/>
                    </div>
                    <div className='center'>
                    <h4> Candice Wu</h4>
                    </div>
                    <div >
                    <p style={{paddingBottom:"15px"}}>Product Manager, Sisyphus </p>
                    </div>
                </div>
                <div className='center'>
                    <h4>Frequently asked questions</h4>
                </div>
                <div className='center'>
                <p>Everything you need to know about the product and billing.</p>
                </div>
                <div className='container'>
                    <div id='cen'>
                        <Toggle/>
                    </div>
                </div>
                <div className='bg-body-tertiary container' style={{height:"auto" ,borderRadius:"10px"}}>
                    <div className='center'>
                        <img src={men} alt={men} className='avatar'/>
                        <img src={women} alt={women} className='avatar'/>
                        <img src={womenn} alt={womenn} className='avatar'/>
                    </div>
                    <div className='center'>
                        <h3>Still have questions?</h3>
                    </div>
                    <p className='center'>Cant't find the answer yor're looking for? Please chat to friendly team.</p>
                    <div className='center'>
                        <Button variant="danger" style={{marginBottom:"15px"}}>Get in touch</Button>
                    </div>
                    <div style={{border:"1px solid "}}></div>
                </div>
            </div>
        </>
    )
}

export default Feature
