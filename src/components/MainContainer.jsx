import '../index.css';
import AboutMe from './AboutMe';
import ClinicalInterests from './ClinicalInterests';
// import InsurancePlans from './InsurancePlans';
import Credentials from './Credentials';
// import Languages from './Languages';
// import FAQ from './FAQ';

function header() {
  return (
    <div className='MainContainer'>
    <AboutMe />
    <Credentials />
    <ClinicalInterests />
    {/* <InsurancePlans /> */}
    </div>
  );
}

export default header;
