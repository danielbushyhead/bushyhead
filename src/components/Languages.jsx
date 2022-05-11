import '../index.css';
import data from '../data';


function Languages() {

  return (
    <div className='section'>
      <div className='title'>Languages</div> 
      <p className='list'>
        {data.languages}
      </p>
    </div>
  );
}

export default Languages;
