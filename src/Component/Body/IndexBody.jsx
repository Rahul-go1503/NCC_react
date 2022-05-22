import React from 'react'
import './body.css'

const IndexBody = () => {
  return (
    <>
    <div className="Our_AIM">
    {/* <!-- <div className="aim">
      <p className="aim-pledge-heading" style="font-size: 32px;">
        Our AIM</p>
    </div> --> */}
    <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
      <div className="line"></div>
      <p className="heading">Our AIM</p>
      <div className="line"></div>
    </div>
    <div className="flex-container">
      <img className="pics" src="./images/Aim.jpg" alt="Flag" style={{'position':"relative"}} />
      <div className="text" style= {{'fontWeight': '400'}}>
        <p>The Aims of the NCC laid out in 1988 have stood the test of time and continue to meet the
          requirements expected of it in the current socio–economic scenario of the country.
        <ul>
          <li> To Create a Human Resource of Organized, Trained and Motivated Youth, To Provide Leadership in
            all Walks of life and be Always Available for the Service of the Nation.</li>
          <li>To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces.
          </li>
          <li>To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure,
            and Ideals of Selfless Service amongst the Youth of the Country.</li>
        </ul>
        </p>
        <div className="reference">
          <p>Source: <a href="http://indiancc.nic.in/aim-of-ncc/">indiancc.nic.in/aim-of-ncc/ </a></p>
        </div>
      </div>
    </div>

  </div>
  {/* <!--Pledge part--> */}
  <div className="Pledge">
    {/* <!-- <div className="pldge">
      <p className="aim-pledge-heading">
        Our Pledge
      </p>
    </div> --> */}
    <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
      <div className="line"></div>
      <p className="heading">Our Pledge</p>
      <div className="line"></div>
    </div>
    <div className="flex-container">
      <img className="pics" src="./images/Pledge.png" alt="Pledge" style={{'position':"relative"}}/>
      <div className="text">
        <p>We the cadets of the National Cadet Corps, do solemnly pledge that we shall always uphold the unity
          of India. We resolve to be disciplined and responsible citizens of our nation. We shall undertake
          positive community service in the spirit of selflessness and concern for our fellow beings.</p>
        <div className="reference">
          <p>Source: <a href="http://indiancc.nic.in/pledge/">indiancc.nic.in/pledge/</a></p>
        </div>
      </div>
    </div>
  </div>
  <div className="ncc-song">
    {/* <!-- <div className="pldge mb-2">
      <p className="aim-pledge-heading"><a href="https://www.youtube.com/watch?v=K2faLjlM8iY" target="_blank"
          style="text-decoration: none; color: #fff;">
          NCC Song</a>
      </p>
    </div> --> */}
    <div className="section-heading text-center d-flex align-items-center justify-content-around py-3">
      <div className="line"></div>
      <p className="heading"><a href="https://www.youtube.com/watch?v=K2faLjlM8iY" target="_blank" rel="noreferrer"
        style={{'textDecoration': 'none','color':'#212529'}} >
        NCC Song</a></p>
      <div className="line"></div>
    </div>
    <p className="text-center song_text">
      Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain<br/> Apni Manzil Ek Hai,<br/> Ha, Ha, Ha, Ek Hai,<br/>
      Ho, Ho, Ho, Ek Hai.<br/> Hum Sab Bharatiya Hain.<br/>
      <br/> Kashmir Ki Dharti Rani Hai,<br/> Sartaj Himalaya Hai,<br/> Saadiyon Se Humne Isko Apne Khoon Se
      Pala Hai<br/> Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br/> Hum Shamshir Utha Lenge.<br/>
      <br/> Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br/> Ha, Ha, Ha, Ek Hai<br/> Hum Sab Bharatiya
      Hai.<br/> Mandir Gurudwaare Bhi Hain Yahan<br/> Aur Masjid Bhi Hai Yahan<br/> Girija Ka Hai Ghariyaal
      Kahin<br/> Mullah ki Kahin Hai Ajaan<br/>
      <br/> Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,<br/> Ek Hee Allah Taala Hain, Raang Birange Deepak
      Hain Hum,<br/> lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.<br/> Hum Sab Bharatiya Hain, Hum
      Sab Bharatiya Hain.
    </p>
    <div className="reference">
      {/* <p style="margin-right: 55px; padding-bottom: 30px;">Source: <a */}
      <p style={{marginRight : '55px', paddingBottom : '30px'}} >Source: <a
          href="http://indiancc.nic.in/ncc-song-lyrics/">indiancc.nic.in/ncc-song-lyrics/</a></p>
    </div>
  </div>
    </>
  )
}

export default IndexBody