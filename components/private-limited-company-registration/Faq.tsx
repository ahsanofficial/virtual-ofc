import Image from "next/image";
import React, { useState } from "react";
import up_arrow from "../../assets/icons/private-limited-company-registration/Faq/up_arrow.svg";



const faqItems = [
    {
        "question": "Can I register Pvt Ltd by myself?",
        "answer": "A virtual office allows you to have an office space without physically owning or paying for one. It is a cost-effective solution for those looking to rent an office space to start/expand their business in a new city, running a remote business, manage stocks and supply in different states across India."
    },
    {
        "question": "Do I need to be physically present during this process?",
        "answer": "There is no specific minimum capital requirement for company registration in Mauritius, except for certain types of business activities where minimum capital may be prescribed by law."
    },
    {
        "question": "What documents are required to complete the process?",
        "answer": "Yes, foreigners can register companies in Mauritius, subject to compliance with relevant laws and regulations. Foreigners may need to appoint a local resident director and engage the services of a local registered agent."
    },
    {
        "question": "Does a private limited company have continuous existence?",
        "answer": "Yes, certain business activities in Mauritius may require special permits or licenses from regulatory authorities, such as the Financial Services Commission (FSC) for financial services companies or the Board of Investment (BOI) for foreign investment projects."
    },
    {
        "question": "Is it necessary to have a company’s books audited?",
        "answer": "Companies registered in Mauritius are required to comply with annual reporting and filing obligations, including the submission of annual returns, financial statements, and tax returns to the Registrar of Companies and the Mauritius Revenue Authority."
    },
]

const Faq = () => {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const handleItemClick = (itemId: number) => {
        setOpenItem(prevOpenItem => prevOpenItem === itemId ? null : itemId);
    };

  return (
    <div id='Faq' className="page_three_faq">
        <div  className="container">
            <div className="heading">
                <h2 className="lg-heading">Questions in Mind</h2>
                <h2 className="sm-heading">Questions in <span>Mind?</span></h2>
                <p>Read our FAQs</p>
                <div />
            </div>
            <ul className="faq-container">
                {
                    faqItems.map((item, index) => (
                        <div onClick={() => handleItemClick(index)} key={index} className={`question-card ${
                            index !== 0 && 'border-top-mobile'
                        } ${openItem === index ? 'plus' : 'close'}`}>
                            <div className="ques-container">
                                <li>{item.question}</li>
                                <div className="">
                                    <Image src={up_arrow} alt="icon" className={`${openItem === index ? 'up_arrow' : 'down_arrow'}`} />
                                </div>
                            </div>
                            <div  className={`${openItem === index ? 'ans' : 'd-none'}`}>
                                {item.answer && <p>{item.answer}</p>}
                            </div>
                        </div>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default Faq;