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
        "question": "What is the minimum capital requirement for company registration in Mauritius?",
        "answer": "There is no specific minimum capital requirement for company registration in Mauritius, except for certain types of business activities where minimum capital may be prescribed by law."
    },
    {
        "question": "How long does it take to register a company in Mauritius?",
        "answer": "The timeframe for company registration in Mauritius varies depending on factors such as the completeness of the application and the workload of the Registrar of Companies. It typically takes between 2 to 4 weeks."
    },
    {
        "question": "Can a foreigner register a company in Mauritius?",
        "answer": "Yes, foreigners can register companies in Mauritius, subject to compliance with relevant laws and regulations. Foreigners may need to appoint a local resident director and engage the services of a local registered agent."
    },
    {
        "question": "What are the tax implications for companies registered in Mauritius?",
        "answer": "Mauritius offers various tax incentives for companies, including low corporate tax rates and tax exemptions for certain types of business activities. However, it's essential to understand the tax residency rules and double taxation agreements that Mauritius has in place."
    },
    {
        "question": "Are there any special permits or licenses required for certain types of businesses in Mauritius?",
        "answer": "Yes, certain business activities in Mauritius may require special permits or licenses from regulatory authorities, such as the Financial Services Commission (FSC) for financial services companies or the Board of Investment (BOI) for foreign investment projects."
    },
    {
        "question": "Can I register an offshore company in Mauritius?",
        "answer": "Yes, Mauritius is a popular jurisdiction for the registration of offshore companies, known as Global Business Companies (GBCs). These companies enjoy various tax benefits and are suitable for international business activities."
    },
    {
        "question": "What are the annual compliance requirements for companies registered in Mauritius?",
        "answer": "Companies registered in Mauritius are required to comply with annual reporting and filing obligations, including the submission of annual returns, financial statements, and tax returns to the Registrar of Companies and the Mauritius Revenue Authority."
    },
    {
        "question": "Can I change the name or structure of my company after registration in Mauritius?",
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
            <h1 className="heading">Questions in mind?</h1>
            <h2 className="heading-two">Read our FAQ</h2>
            <div className="border-container">
                <hr className="hr-border"/>
                <hr className="hr-border"/>
            </div>
        </div>
        <div className="all-faq">
            {faqItems.map((item, index) => (
                <div onClick={() => handleItemClick(index)} key={index} className={`question-card ${openItem === index ? 'plus' : 'close'}`}>
                    <div  className="d-flex justify-content-between ">
                        <h3 className='ques'>{item.question}</h3>
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