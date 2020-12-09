import React from "react";

class MoneyTable extends React.Component{

    render(){
        return(
            <div className="moneyTable">
                <div id="money1000" className={`banner ${this.props.currentMoney===9 ? "moneyPointHighlight":"moneyPoint"}`}><p>£1000</p></div>
                <div id="money800" className={`banner ${this.props.currentMoney===8 ? "moneyPointHighlight":"moneyPoint"}`}><p>£800</p></div>
                <div id="money600" className={`banner ${this.props.currentMoney===7 ? "moneyPointHighlight":"moneyPoint"}`}><p>£600</p></div>
                <div id="money450" className={`banner ${this.props.currentMoney===6 ? "moneyPointHighlight":"moneyPoint"}`}><p>£450</p></div>
                <div id="money300" className={`banner ${this.props.currentMoney===5 ? "moneyPointHighlight":"moneyPoint"}`}><p>£300</p></div>
                <div id="money200" className={`banner ${this.props.currentMoney===4 ? "moneyPointHighlight":"moneyPoint"}`}><p>£200</p></div>
                <div id="money100" className={`banner ${this.props.currentMoney===3 ? "moneyPointHighlight":"moneyPoint"}`}><p>£100</p></div>
                <div id="money50" className={`banner ${this.props.currentMoney===2 ? "moneyPointHighlight":"moneyPoint"}`}><p>£50</p></div>
                <div id="money20" className={`banner ${this.props.currentMoney===1 ? "moneyPointHighlight":"moneyPoint"}`}><p>£20</p></div>        
            </div>
        )
    }

}

export default MoneyTable;
