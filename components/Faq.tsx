import Image from "next/image";
import React, { useState } from "react";
import plus from "../assets/icons/plus.svg"



const faqItems = [
    {
        "question": "How can a virtual office benefit my business in India?",
        "answer": "To register a company in Mauritius, you need to submit the required documents to the Registrar of Companies, including the company's memorandum and articles of association, proof of address, and identification documents for shareholders and directors."
    },
    {
        "question": "How can I cancel my virtual office service if needed?",
        "answer": "Mauritius allows the registration of various types of companies, including private limited companies, public companies, and global business companies (GBCs), each with different requirements and benefits."
    },
    {
        "question": "Can I legally register my business using a virtual office address in India?",
        "answer": "There is no specific minimum capital requirement for company registration in Mauritius, except for certain types of business activities where minimum capital may be prescribed by law."
    },
    {
        "question": "Is it possible to upgrade or downgrade my virtual office plan as my business needs change?",
        "answer": "The timeframe for company registration in Mauritius varies depending on factors such as the completeness of the application and the workload of the Registrar of Companies. It typically takes between 2 to 4 weeks."
    },
    {
        "question": "How will I receive my business mail and packages with a virtual office?",
        "answer": "Yes, foreigners can register companies in Mauritius, subject to compliance with relevant laws and regulations. Foreigners may need to appoint a local resident director and engage the services of a local registered agent."
    },
    {
        "question": "Can I access meeting rooms and conference facilities with a virtual office plan?",
        "answer": "Mauritius offers various tax incentives for companies, including low corporate tax rates and tax exemptions for certain types of business activities. However, it's essential to understand the tax residency rules and double taxation agreements that Mauritius has in place."
    },
    {
        "question": "Can I use a virtual office address for official correspondence and marketing materials?",
        "answer": "Yes, certain business activities in Mauritius may require special permits or licenses from regulatory authorities, such as the Financial Services Commission (FSC) for financial services companies or the Board of Investment (BOI) for foreign investment projects."
    },
    {
        "question": "Are there any additional fees or hidden costs associated with virtual office services in India?",
        "answer": "Yes, Mauritius is a popular jurisdiction for the registration of offshore companies, known as Global Business Companies (GBCs). These companies enjoy various tax benefits and are suitable for international business activities."
    },
    {
        "question": "Do virtual office services in India include call answering and forwarding?",
        "answer": "Companies registered in Mauritius are required to comply with annual reporting and filing obligations, including the submission of annual returns, financial statements, and tax returns to the Registrar of Companies and the Mauritius Revenue Authority."
    },
    {
        "question": "What kind of documentation do I need to provide to set up a virtual office in India?",
        "answer": "Yes, you can change the name or structure of your company after registration by following the procedures prescribed by the Registrar of Companies, which may involve obtaining shareholder approval and updating the company's statutory documents."
    }
]

const Faq = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        setOpenItem(prevOpenItem => prevOpenItem === itemId ? null : itemId);
    };
  return (
    <div id='Faq' className="home_faq_component">
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
                            <Image src={plus} alt="icon" className={`${openItem === index ? 'rotate-icon' : 'icon'}`} />
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