import Image from "next/image";
import React, { useState } from "react";
import plus from "../../assets/icons/cross.svg";



const faqItems = [
    {
        "question": "How does a virtual office differ from a traditional office?",
        "answer": "A virtual office provides essential business services, such as a prestigious address, mail handling, and receptionist support, without the need for a physical office space. It offers flexibility and cost savings compared to traditional office setups."
    },
    {
        "question": "Can I use the virtual office address for legal purposes or business registration?",
        "answer": "Yes, you can use our virtual office address for business registration, marketing materials, and legal correspondence. It provides a professional image for your business without the expense of leasing physical office space."
    },
    {
        "question": "How do I receive my mail and packages with a virtual office?",
        "answer": "We offer mail handling services as part of our virtual office package. You can choose to have your mail forwarded to your preferred address or pick it up from our location at your convenience. We also provide package acceptance and notification services."
    },
    {
        "question": "Can I schedule meetings or use office space with a virtual office plan?",
        "answer": "Yes, many of our virtual office plans include access to meeting rooms, coworking spaces, and business lounges on a pay-as-you-go basis. You can book these facilities online or through our customer service team."
    },
    {
        "question": "Is there a minimum contract length for virtual office services?",
        "answer": "We offer flexible contract options to suit your needs. You can choose from month-to-month plans or longer-term contracts based on your preferences. There are no long-term commitments, allowing you to adjust your plan as your business evolves."
    },
]

const Faq = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        setOpenItem(prevOpenItem => prevOpenItem === itemId ? null : itemId);
    };
  return (
    <div id='Faq' className="landing_page_faq">
    <div  className="container">
        <div className="heading-container">
            <h1 >Questions in mind?</h1>
            <h2>Read our FAQ</h2>
            <div className="border-container">
                <hr className="hr-border"/>
                <hr className="hr-border"/>
            </div>
        </div>
        <div className="faq-container">
            {faqItems.map((item, index) => (
                <div onClick={() => handleItemClick(index)} key={index} className={`question-card ${openItem === index ? 'plus' : 'close'}`}>
                    <div className="ques-container">
                        <h3>{item.question}</h3>
                        <div>
                            <Image src={plus} alt="icon" className={`${openItem === index ? 'icon' : 'rotate-icon'}`} />
                        </div>
                    </div>
                    <div  className={`${openItem === index ? 'ans' : 'd-none'}`}>
                        {item.answer && <p>{item.answer}</p>}
                        
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;