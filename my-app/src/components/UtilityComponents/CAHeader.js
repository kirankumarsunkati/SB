import React from 'react';
import './../../CA.css';

class CAHeader extends React.Component{
render(){
	const {Text} = this.props;
	const {showCloseIcon} = this.props;
	const {showBackArrow} = this.props;
	const {showPipe} = this.props;
  return(
			<div className="CAWrapper">
				<span className="floatLeft">
							{showBackArrow && <span className = "fLeft icons" > ^ </span>}
							{showPipe && <span className = "fLeft icons" > | </span>}
							<p className="mainHeader">{Text}</p>
				</span>
				<span className="floatRight">
						X
				</span>
			</div>
  );

}
}
export default CAHeader;
