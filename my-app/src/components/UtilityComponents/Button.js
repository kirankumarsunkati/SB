import React from 'react';

class Button extends React.Component{
	returnDomValue = () => {
		console.log(this.props.ButtonNames);

	}
render(){
	const {Text} = this.props;
	const {linkTo} = this.props;
	const {ButtonNames} = this.props;
	let name = '';
  return(
			<div>
			<span>{Text}</span>
			</div>
  );

}
}
export default Button;
