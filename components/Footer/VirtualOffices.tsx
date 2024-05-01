
import React from 'react'

const virtualOfficesList = [
    {
        id: "virtualOffices-1",
        title: "Virtual Office in Major Cities",
        content:"Virtual Office in Delhi | Virtual Office in Gurgaon | Virtual Office in Bangalore | Virtual Office in Mumbai | Virtual Office in Pune | Virtual Office in Kolkata | Virtual Office in Chennai | Virtual Office in Noida | Virtual Office in Kochi | Virtual Office in Jaipur | Virtual Office in Hyderabad | Virtual Office in Chandigarh | Virtual Office in Lucknow | Virtual Office in Mohali",
    },
    {
        id: "virtualOffices-2",
        title: "Virtual Office for GST in Major Cities",
        content:"Virtual Office for GST in Delhi | Virtual Office for GST in Gurgaon | Virtual Office for GST in Bangalore | Virtual Office for GST in Mumbai | Virtual Office for GST in Pune | Virtual Office for GST in Kolkata | Virtual Office for GST in Chennai | Virtual Office for GST in Noida | Virtual Office for GST in Kochi | Virtual Office for GST in Jaipur | Virtual Office for GST in Hyderabad | Virtual Office for GST in Lucknow | Virtual Office for GST in Chandigarh | Virtual Office for GST in Mohali",
    },
    {
        id: "virtualOffices-3",
        title: "Virtual Office for Business in Major Cities",
        content:"Virtual Office for Business in Delhi | Virtual Office for Business in Gurgaon | Virtual Office for Business in Bangalore | Virtual Office for Business in Mumbai | Virtual Office for Business in Pune | Virtual Office for Business in Kolkata | Virtual Office for Business in Chennai | Virtual Office for Business in Noida | Virtual Office for Business in Kochi | Virtual Office for Business in Jaipur | Virtual Office for Business in Hyderabad | Virtual Office for Business in Lucknow | Virtual Office for Business in Chandigarh | Virtual Office for Business in Mohali",
    },
    {
        id: "virtualOffices-4",
        title: "Virtual Office with Mailing Address in Major Cities",
        content:"Virtual Office with Mailing Address in Delhi | Virtual Office with Mailing Address in Gurgaon | Virtual Office with Mailing Address in Bangalore | Virtual Office with Mailing Address in Mumbai | Virtual Office with Mailing Address in Pune | Virtual Office with Mailing Address in Kolkata | Virtual Office with Mailing Address in Chennai | Virtual Office with Mailing Address in Noida | Virtual Office with Mailing Address in Kochi | Virtual Office with Mailing Address in Jaipur | Virtual Office with Mailing Address in Hyderabad | Virtual Office with Mailing Address in Lucknow | Virtual Office with Mailing Address in Chandigarh | Virtual Office with Mailing Address in Mohali",
    },
]

export const VirtualOffices = () => {
  return (
    <div className='footer-bottom'>
        <div className='container'>
            <div className='virtual-offices'>
                {virtualOfficesList.map((item) => (
                    <div key={item.id} className='virtual-office-item'>
                        <h4>{item.title}</h4>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>

            <div className='horizontal-line'/>

            <div className='copyright'>
                <p>Copyright © 2019, Team Cowork. All Rights Reserved</p>
                <p>Powered by MXN Realspaces Pvt Ltd</p>
            </div>



        </div>

    </div>
  )
}
