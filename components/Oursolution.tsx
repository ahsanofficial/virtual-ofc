import React from "react";
import Image from "next/image";

import oursolution from "../assets/oursolution/oursolution.svg";
import talktous from "../assets/oursolution/talktous.svg";
import bookworkspace from "../assets/oursolution/bookworkspace.svg";
import virtualoffice from "../assets/oursolution/virtualoffice.svg";
import buyamembership from "../assets/oursolution/buyamembership.svg";
import exploreourapp from "../assets/oursolution/exploreourapp.svg";
import arrow from "../assets/oursolution/arrow.svg";

const our_solution_items = [
  {
    "title": "Our solutions",
    "para": " Browse our full range of products and services.",
    "icon":oursolution,
  },
  {
    "title": "Talk to us",
    "para": " Get advise from one of our experts 24/7.",
    "icon":talktous,
  },
  {
    "title": "Book workspace",
    "para": "Book meeting rooms and  day offices now.",
    "icon":bookworkspace,
  },
  {
    "title": "Set up a virtual office",
    "para": " Start building a real presence today.",
    "icon":virtualoffice,
  },
  {
    "title": "Buy a membership",
    "para": " Start building a real presence today.",
    "icon":buyamembership,
  },
  {
    "title": "Explore our app",
    "para": " Start building a real presence today.",
    "icon":exploreourapp,
  },
];

const Oursolution = () => {
  return (
    <div className="our-solution">
        <div className="container-new">
            {
                our_solution_items.map((item,index)=>(
                    <div key={index} className="card-item">
                        <Image src={item.icon} alt={item.title} className="icon"/>
                        <div className="details-card">
                            <h4>{item.title}<div className="line"></div></h4>
                            <p>{item.para}</p>
                             <Image src={arrow} alt={item.title}/>
                        </div>
                    
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default Oursolution;
