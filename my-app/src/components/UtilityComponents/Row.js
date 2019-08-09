import React from 'react';

class Row extends React.Component{
render(){
  const {name} = this.props;
  const {value} = this.props;
  let headerClass = this.props.isHeader === "true" ? 'header' : '';
  let classNameValue ="row";
  classNameValue =  classNameValue+' '+headerClass;
  return(

    <div className={classNameValue}>
        <div className="col-6">
          {name}
            {this.props.isHeader}
        </div>
        <div className="col-6">
          {value}
        </div>
    </div>
  );

}
}
export default Row;
