import React from 'react';

class Row extends React.Component{
render(){
  const {name} = this.props;
  const {value} = this.props;
  const {noBorder} = this.props;
  let headerClass = this.props.isHeader === "true" ? 'header' : 'nonHeader';
  let borderClass =  noBorder === "true" ? "noBorder" : "border";
  let classNameValue ="row borderTop";
  classNameValue =  classNameValue+' '+headerClass+ ' '+borderClass;
  return(
    <div className={classNameValue}>
        <div className="col-6 text-left">
          {name}
        </div>
        <div className="col-6 text-right">
          {value}
        </div>
    </div>
  );

}
}
export default Row;
