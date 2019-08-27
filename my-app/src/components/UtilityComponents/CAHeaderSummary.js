import React from 'react';
import './../../CA.css';

class CAHeaderSummary extends React.Component{
render(){
	const {Text} = this.props;
	const {showCloseIcon} = this.props;
  return(
			<div className="CAWrapperSummary">
				<div className="floatLeft">
							<p className="boxWrapper fLeft">Summary</p>
							<p className="boxWrapper">
										<span className="boxWrapperTitle fLeft">$122.90</span>
										<span className="boxWrapperTitle fLeft">Due Monthly</span>
							</p>
							<p className="boxWrapper">
										<span className="boxWrapperTitle fLeft">$190.0</span>
										<span className="boxWrapperTitle fLeft">Due today</span>
							</p>
							<p className="boxWrapper">
										<span className="boxWrapperTitle fLeft">$148.0</span>
										<span className="boxWrapperTitle fLeft">Due next bill</span>
							</p>
				</div>
			</div>
  );

}
}
export default CAHeaderSummary;
