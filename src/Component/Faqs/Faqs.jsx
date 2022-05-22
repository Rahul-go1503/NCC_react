import React from 'react'
import './Faqs.css'
import data from './DataFaqs'

const Faqs = () => {
  return (
    <div class="container mb-5">
      <p class="heading">Frequently Asked Questions</p>
      <div class="accordion" id="accordionExample">
        {data.map((faq,index)=>(
          <div class="accordion-item">
          <h2 class="accordion-header" id={`heading${index+1}`}>
            <button class={`accordion-button ${index==0?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index+1}`}
              aria-expanded={index==0?'true':'false'} aria-controls={`#collapse${index+1}`}>
              {index+1}. {faq.ques}
            </button>
          </h2>
          <div id={`collapse${index+1}`} class={`accordion-collapse collapse ${index==0?'show':''}`} aria-labelledby={`heading${index+1}`}
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>
                {faq.ans}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs