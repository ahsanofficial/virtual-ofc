import Image from "next/image";
import React, { useState } from "react";
import up_arrow from "../../assets/icons/up_arrow.svg";



const faqItems = [
    {
        "question": "How can a virtual office benefit my business in India?",
        "answer": "A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
    },
    {
        "question": "How can I cancel my virtual office service if needed?",
        "answer": "There is no specific minimum capital requirement for company registration in Mauritius, except for certain types of business activities where minimum capital may be prescribed by law."
    },
    {
        "question": "Can I legally register my business using a virtual office address in India?",
        "answer": "Yes, foreigners can register companies in Mauritius, subject to compliance with relevant laws and regulations. Foreigners may need to appoint a local resident director and engage the services of a local registered agent."
    },
    {
        "question": "How will I receive my business mail and packages with a virtual office?",
        "answer": "Yes, certain business activities in Mauritius may require special permits or licenses from regulatory authorities, such as the Financial Services Commission (FSC) for financial services companies or the Board of Investment (BOI) for foreign investment projects."
    },
    {
        "question": "Do virtual office services in India include call answering and forwarding?",
        "answer": "Companies registered in Mauritius are required to comply with annual reporting and filing obligations, including the submission of annual returns, financial statements, and tax returns to the Registrar of Companies and the Mauritius Revenue Authority."
    },
]

const Faq = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        setOpenItem(prevOpenItem => prevOpenItem === itemId ? null : itemId);
    };
  return (
    <div id='Faq' className="page_two_faq">
    <div  className="container">
            <h2 >Frequently Asked Questions</h2>
        <div className="faq-container">
            {faqItems.map((item, index) => (
                <div onClick={() => handleItemClick(index)} key={index} className={`question-card ${(faqItems.length-1) === (index)?'':'bottom-border'}  ${openItem === index ? 'plus' : 'close'}`}>
                    <div className="ques-container">
                        <h3>{item.question}</h3>
                        <div>
                            <Image src={up_arrow} alt="icon" className={`${openItem === index ? 'up_arrow' : 'down_arrow'}`} />
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