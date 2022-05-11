import '../index.css';
import data from '../data';


function Credentials() {

  let credentialTitles = Object.keys(data.credentials).map(ele => 
    [ 
      <div className='credentialSection'> 
              <div className='credentialTitle'>{ele}</div>
              <div>{data.credentials[ele]}</div>
      </div>
    ] 
  )

  return (
    <div className='section'>
      <div className='title'>Credentials</div> 
      <p className='content'>
        {credentialTitles}
      </p>
    </div>
  );
}

export default Credentials;
