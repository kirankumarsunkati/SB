import React from 'react';

class Row extends React.Component{
render(){
  const {name} = this.props;
  const {value} = this.props;
  let headerClass = this.props.isHeader === "true" ? 'header' : 'nonHeader';
  let classNameValue ="row borderTop";
  classNameValue =  classNameValue+' '+headerClass;
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
