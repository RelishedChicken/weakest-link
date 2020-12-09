import React from "react";

class Bank extends React.Component{

    render(){
        return(
            <div className="bank">
                <h3 className="bankTitle">Bank</h3>      
                <p className="bankAmount">£{this.props.bankAmount}</p>
            </div>
        )
    }

}

export default Bank;
