import React, { Component } from 'react';
class Result extends Component {


  render() {
    var {onLoad,currentText}=this.props;
    return (
      <div className="form-group">
    <form>
      <label>I want to know the weather for
        <input placeholder={"City"} type="text" value={currentText} onChange={(e)=>onLoad(e.target.value)}/>
      </label>
    </form>
    </div>
  );
  };
}

export default Result;
