import './App.css';
import { useState } from 'react';

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'Finland',
    label: 'Finland',
  },
  {
    value: 'Sweden',
    label: 'Sweden',
  },
  {
    value: 'Norway',
    label: 'Norway',
  },
  {
    value: 'Denmark',
    label: 'Denmark',
  },
]

const selectOptions = options.map(({value , label}) => (
<option value={value}>{label}</option>
))

function App() {
  
  const [formData, setFormData] = useState({ firstName: '',
    lastName: '',
    email: '',
    country: '',
    tel: '',
    dateOfBirth: '',
    favoriteColor: '',
    weight: '',
    gender: '',
    file: '',
    bio: '',
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  });


  const handleChange =(e)=>{
    const { name, value, type,checked,files } = e.target;
    // updating the state using the name attribute of input as the key
    if (type === 'checkbox') {
      setFormData({...formData , skills:{...formData.skills , [name]:checked}})
    } else if (type === 'file') {
      setFormData({...formData , [name]: files[0]})
    } else
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const { firstName,lastName,email,tel,dateOfBirth,favoriteColor,weight,gender,bio} = formData;
  return (
    <div className="App">
      <header className="App-header">
        <h2>30 Days of React</h2>
        <h3>Day 10 - Student Details Form</h3>
      </header>
      <h3>Add Student</h3>
        <form onSubmit={handleSubmit} className='studentForm'>
          <div className='formItem'>
          <label htmlFor='firstName'>First Name </label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='lastName'>Last Name </label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'> 
          <label htmlFor='email'>Email </label>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='country'> Tel </label>
            <input
              type='text'
              name='tel'
              placeholder='Telephone Number'
              value={tel}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='dateOfBirth'>Date Of Birth </label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='favoriteColor'>Favorite Color </label>
            <input
              type='color'
              name='fav_color'
              value={favoriteColor}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='weight'>Weight </label>
            <input
              type='text'
              name='weight'
              placeholder='Weight in Kg'
              value={weight}
              onChange={handleChange}
            />
          </div>
          <div  className='formItem'>
          <label htmlFor='country'>Country </label>
            <select id='country' name='country' onChange={handleChange}>
              {selectOptions}
            </select>
          </div>
          <div  className='formItem'>
            <p>Gender</p>
           <div>
            <input
              id='male'
              type='radio'
              name='gender'
              value='Male'
              checked={gender === 'Male'}
              onChange={handleChange}
            />
            <label htmlFor='male'>Male </label>
            <input
              id='female'
              type='radio'
              name='gender'
              value='Female'
              checked={gender === 'Female'}
              onChange={handleChange}
            />
            <label htmlFor='male'>Female </label>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>

          <div  className='formItem'>
          <p>Select your skills</p>
          <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={handleChange}
              />
              <label htmlFor='javascript'>Java Script</label>
            </div>          
          </div>

          <div  className='formItem'>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={handleChange}
              cols='100'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div  className='formItem'>
            <input type='file' name='file' onChange={handleChange} />
          </div>
          <button className='button'>Submit</button>
        </form>

    </div>
  );
}

export default App;
