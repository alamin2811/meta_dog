import React, { useState } from 'react';

const FaqSection = () => {
    // Array of FAQ objects
    const faqs = [
        {
            question: 'What are the benefits of treaders?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
        {
            question: 'Does MetaDog support all networks?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
        {
            question: 'Why should we choose MetaDog?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
        {
            question: 'Is this support fiat payment?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
        {
            question: 'How secure is this token?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
        {
            question: 'What is your contract address?',
            answer: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can Launchpad him some great pleasure. To take a trivial example. which of us ever Votting laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
        },
    ];

    // State to track if the component has been rendered for the first time
    const [firstRender, setFirstRender] = useState(true);

    return (
        <div className='faq-section' id='fqSection'>
            <div className="container">
                <div className="section-title text-center">
                    <h2 className='subtitle'>Frequently Asked Questions</h2>
                </div>
                <div className="faq-content">
                    <div className="accordion" id="accordionExample">
                        {/* Mapping over the FAQ array to render each FAQ item */}
                        {faqs.map((faq, index) => (
                            <div className="accordion-item metadog-accordion-item" key={index}>
                                <h2 className="accordion-header">
                                    <button className={`accordion-button${firstRender && index === 0 ? '' : ' collapsed'}`} type="button" data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`} aria-expanded={index === 0 || !firstRender ? 'true' : 'false'} aria-controls={`collapse${index}`}>
                                        {faq.question}
                                        <span className="shape left"></span>
                                        <span className="shape right"></span>
                                    </button>
                                </h2>
                                <div id={`collapse${index}`} className={`accordion-collapse collapse${index === 0 || !firstRender ? ' show' : ''}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body metadog-accordion-body">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;
