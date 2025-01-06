import {useState, Fragment} from 'react'
import { RightSide } from '../RightSide/rightSide';
import { nativeDOM } from '../nativeJs/buttonDom';
export function LeftSide() {
    return(
        <>
          <div className='general'>
            <h2>General information</h2>
            <Section sub={0}>
            <Label id='firstName' name='First name' />
            <Label id='lastName' name='Last name' />
            <Label id='email' name='Email address' type='email' />
            <Label id='number' name='Phone number' type='tel' />
            <Label id='address' name='Address' />
            </Section>
          </div>
          <hr />

          <div className="education">
            <h2>Education</h2>
            <Section sub={1}>
            <Label id='education' name='Education' />
            <Label id='cityEducation' name='City'/>
            <Label id='startDateEd' name='Start date' type='date' />
            <Label id='endDateEd' name='End date' type='date'/>
            <label htmlFor='descriptionEd' className='descriptionEd'>Description:
              <textarea placeholder='About education' id='descriptionEd' maxLength={220}></textarea>
            </label>
            </Section>
          </div>
          <hr />

          <div className="employment">
            <h2>Employment</h2>
            <Section sub={2}>
            <Label id='position' name='Position' />
            <Label id='employer' name='Employer' />
            <Label id='startDateJob' name='Start date' type='date' />
            <Label id='endDateJob' name='End date' type='date' />
            <label htmlFor='responsibilities' className='responsibilities'>Responsibilities:
              <textarea placeholder='About responsibilities' id='responsibilities' maxLength={220}></textarea>
            </label>
            </Section>
          </div>
        </>
    )
}

function Section( {children, sub} ) {
const [isActive, setActive] = useState(false);

function setActiveFn(e) {
    isActive ? setActive(false) : setActive(true);
    e.currentTarget.classList.toggle('up');
};
return (
 <>
 <span className='buttons'>
  <button onClick={setActiveFn} className='hideBtn'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='arrow'>
      <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
    </svg>
  </button>
  <button className={sub + " " + 'submit'} onClick={nativeDOM}>Submit</button>
  </span>
  {isActive ? <>{ children }</> : ''}
 </>
 )
};
 

export function Label({ id, name, type='text'}) {
const [text, setText] = useState('');
return (
  <>
   <label className={id} htmlFor={id}>{name}:
      <input type={type} id={id} value={text} maxLength={55} onChange={e => setText(e.target.value)}/>
   </label>
  </>
 )
 
};
