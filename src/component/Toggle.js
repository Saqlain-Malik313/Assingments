import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const Toggle = () => {
    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0" >
                    <Accordion.Header>Is there a free trial available?</Accordion.Header>
                    <Accordion.Body>
                    <p>Yes, you can try us for free for 30 days. If you want, we'll provide you with a free,
                    personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" >
                    <Accordion.Header>Can I change my plan later?</Accordion.Header>
                    <Accordion.Body>
                    <p>Sure you can change your later.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" >
                    <Accordion.Header>What is your cancellation policy?</Accordion.Header>
                    <Accordion.Body>
                    <p>A cancellation policy is a set of rules that outline the terms and conditions for canceling or rescheduling appointments, bookings, or orders.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" >
                    <Accordion.Header>Can other info be added to an invoice?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" >
                    <Accordion.Header>How does billing work?</Accordion.Header>
                    <Accordion.Body>
                    <p>Billing is the process of sending an invoice to customers for goods or services they have received.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" >
                    <Accordion.Header>How do I change my account email?</Accordion.Header>
                    <Accordion.Body>
                    <p>To change the email address for your account, you can log in to your account and navigate to your account settings.
                     You can also change your email address on your device settings.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </>
    )
}

export default Toggle