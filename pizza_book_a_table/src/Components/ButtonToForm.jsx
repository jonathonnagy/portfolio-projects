/*import React from 'react';
import  ReactDOM  from 'react';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

export default Toggle*/



/*import { useNavigate } from 'react-router-dom';

function NavigationDemo() {
  const navigate = useNavigate();
  const navigateTo = () => navigate.push('/Form');

  return (
   <div>
   <button onClick={navigateTo} type="button" >Booking a Table</button>
   </div>
  );
}
export default NavigationDemo;
*/


import { useState } from 'react';

const initClassName = 'hidden_form';


function ButtonToForm (props) {

    let [className, setClassName] = useState(initClassName);
    
    const showForm = () => {
      setClassName('form_show');
    }

    return (
      <div>
        <button onClick={showForm} className={className}>Booking a table!</button>
      </div>
    )

}


export default ButtonToForm