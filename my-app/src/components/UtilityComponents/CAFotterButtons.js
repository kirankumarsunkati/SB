import React from 'react';
import './../../CA.css';

class CAFotterButtons extends React.Component{
	returnLi  = () => {
		let liElements = this.props.type.map((name,index) =>
    <li key={index} className="liElement">
      {name}
    </li>
  );
	return <ul>{liElements}</ul>
	}
render(){
	const {Text} = this.props;
	const {showCloseIcon} = this.props;
	const {type} = this.props;

  return(
			<div className="CAFotterButtonsWrapper clearBoth">
					{this.returnLi()}
					</div>
		  );

}
}
export default CAFotterButtons;
