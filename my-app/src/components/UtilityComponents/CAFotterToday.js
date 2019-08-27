import React from 'react';
import './../../CA.css';

class CAFotterToday extends React.Component{
render(){
	const {Text} = this.props;
	const {showCloseIcon} = this.props;
  return(
			<div className="CAFotterTodayWrapper clearBoth">
				<div className="floatLeft ">
						<p className="tLeft paraHeader">Total due today</p>
				</div>
				<div className="floatRight">
							<p className="paraHeader">$190.00</p>
				</div>
			</div>
  );

}
}
export default CAFotterToday;
