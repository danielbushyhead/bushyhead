import '../index.css';
import data from '../data';


function ClinicalInterests() {
  let clinicalInterestList1 = data.clinicalInterests.split(',').map(ele => 
    [<div>{ele}</div>] 
  )
  let clinicalInterestList2 = clinicalInterestList1.splice(Math.ceil(clinicalInterestList1.length / 2), clinicalInterestList1.length - 1)

  return (
    <div className='section'>
      <div className='title'>Clinical Interests</div> 
      <p id='clinicalInterestColumns' className='content'>
        <div>{clinicalInterestList1}</div>
        <div>{clinicalInterestList2}</div>
      </p>
    </div>
  );
}

export default ClinicalInterests;
