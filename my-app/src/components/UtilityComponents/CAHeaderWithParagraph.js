import React from 'react';
import './../../CA.css';

class CAHeaderWithParagraph extends React.Component{
render(){
	const {HeaderTitle} = this.props;
	const {content} = this.props;
	const {subTitle} = this.props;
  return(
			<div className="CAWrapper noBorder">
				<span className="floatLeft">
							{ HeaderTitle && <p className="paraHeader">{HeaderTitle}</p>}
							{ content && <p className="paraContent fLeft tLeft">{content}</p>}
							{subTitle && <p className="paraHeader fLeft tLeft">{subTitle}</p>}
				</span>

			</div>
  );

}
}
export default CAHeaderWithParagraph;
