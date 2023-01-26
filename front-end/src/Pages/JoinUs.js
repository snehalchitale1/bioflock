import RegistrationForm from "./RegistrationForm";
import "./joinus.css"

export default function JoinUs() {
  // const handle_namechange =() =>{
  //     const names =['welcome !', 'Explore bioflock with us', 'Lets dive into world of fishes'];
  //     const int = Math.floor(Math.random()*3);
  //     return names[int];

  return (
    <div>
      <div id="JU_CMP">
      <marquee>
        <h2>
          {" "}
          'Welcome !', 'Explore bioflock with us', 'Lets dive into world of
          fishes'
        </h2>
      </marquee>
      </div>
      <div id="JU_RF">
        <RegistrationForm />
      </div>
    </div>
  );
}
