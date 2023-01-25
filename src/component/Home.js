export default function Home(){
    const handle_namechange =() =>{
        const names = ['welcome !', 'Explore bioflock with us', 'Lets dive into world of fishes!'];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }
    return(
        <div>
            <p className='welcome-message'>
          <h1>{handle_namechange()} </h1>
        </p>
        <p>
        <h5>An environment friendly aquaculture technique based on in-situ microorganism production. Biofloc 
        is the suspended growth in ponds/tanks which is the aggregates of living and dead particulate organic 
         matter, phytoplankton, bacteria and grazers of the bacteria.</h5>
        </p>
        </div>
        
    )
}