import '../index.css';
import data from '../data';



function InsurancePlans() {

let insurancePlanList = data.insurancePlans.split(',').map(ele => 
  [<div>{ele}</div>]
)
  return (
    <div className='section'>
      <div className='title'>Accepted Insurance Plans</div> 
      <p className='content'>
       {insurancePlanList}
      </p>
    </div>
  );
}

export default InsurancePlans;





