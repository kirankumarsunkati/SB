import React from 'react';

class Button extends React.Component{
render(){
	const {Text} = this.props;
	const {linkTo} = this.props;
  return(
			<div>{Text} </div>
  );

}
}
export default Test;
