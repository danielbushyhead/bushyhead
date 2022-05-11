import '../index.css';
import data from '../data';


function FAQ() {

  return (
    <div className='section'>
      <div className='title'>Frequently Asked Questions</div> 
      <p className='list'>
        {data.faq}
      </p>
    </div>
  );
}

export default FAQ;
