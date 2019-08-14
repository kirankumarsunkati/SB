import React from 'react';

class Test extends React.Component{
render(){
	const {msg} = this.props;
  return(
  <span className="helpTextWrapper">{msg}</span>
  );

}
}
export default Test;
