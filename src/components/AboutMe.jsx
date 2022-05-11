import '../index.css';
import data from '../data';

function AboutMe() {
  return (
    <div className='section'>
      <div className='title'>About Me</div> 
      <p className='content'> {data.aboutMe} </p>
    </div>
  );
}

export default AboutMe;
