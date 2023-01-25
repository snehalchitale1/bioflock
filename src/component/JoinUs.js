import RegistrationForm from './RegistrationForm';

export default function JoinUs(){
    const handle_namechange =() =>{
        const names =['welcome !', 'Explore bioflock with us', 'Lets dive into world of fishes'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    return(
      
        <div>
          <p className='welcome-message'>
            <h1>{handle_namechange()} </h1>
          </p>
          
          <div>
          <RegistrationForm/>
          </div>
        </div>
    )
}