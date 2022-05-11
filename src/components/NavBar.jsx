import '../index.css';
import headshot from '../assets/headshot.jpg';
import hospitalLogo from '../assets/SPGBLU.png';



function NavBar() {
  return (
    <div className="NavBar">
      <img src={headshot} className="headshot" alt="headshot" /> 
      <div className='navBarText'> 
        <div>
          <div id='name'>Daniel Bushyhead, MD</div>
          <div>Gastroenterology</div>
        </div>
       
        <div className='titles'> Assistant Professor of Clinical Medicine - Houston Methodist Academic Institute <br /> Assistant Professor of Clinical Medicine - Weill Cornell Medical College <br /> Houston Methodist Gastroenterology Associates
        </div>
        <img src={hospitalLogo} className="hospitalLogo" alt="hospital logo" />
      </div>
    </div>
  );
}

export default NavBar;
