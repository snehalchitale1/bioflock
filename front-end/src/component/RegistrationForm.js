import React from 'react'

export const RegistrationForm = () => {
  return (
    <div className='RegistrationForm'> 
        
        <form>
            <label>
                E-mail
                <input type="text" name="email" />
            </label>
            <input type="submit" value="Submit" />
        </form>
        
    </div>
  )
}

export default RegistrationForm;
