import React from 'react'
import './Admin.css'

export default function Admin(){
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
        <p>
        <h3>Tank Details:</h3>
        <div>
        </div>
        <table>
        <tr>
          <th>Tank No. </th>
          <th>Owner Email-ID</th>
          <th>PH</th>
          <th>Temp</th>
          <th>TDS</th>
          <th> Condition of tank</th>
        </tr>
        
        <tr>
          <td>Tank-1</td>
          <td>xyz@gmail.com</td>
          <td>5</td>
          <td>26</td>
          <td>15</td>
          <td>good</td>
        </tr>
        
        <tr>
          <td>Tank-2</td>
          <td>pqr@gmail.com</td>
          <td>5</td>
          <td>100</td>
          <td>15</td>
          <td>bad</td>
        </tr>

        <tr>
          <td>Tank-3</td>
          <td>abc@gmail.com</td>
          <td>6</td>
          <td>26</td>
          <td>20</td>
          <td>good</td>
        </tr>
        </table>
        </p>
        </div>
        
    )
}