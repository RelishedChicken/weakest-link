import React from "react";

class ControlPanel extends React.Component{

    render(){
        return(
            <div className="controlPanelContainer">
                <div className="questionContainer">
                    <h2>{this.props.question}</h2>
                </div>
                <div hidden={this.props.roundEnded} className="answerContainer">
                    <h3>Answers: {this.props.answers}</h3>
                </div>
                <div hidden={this.props.roundEnded} className="answerContainer">
                    <h3>Correct Answer: {this.props.correctAnswer}</h3>
                </div>
                <div hidden={this.props.roundEnded} className="buttonContainer">
                    <button onClick={this.props.roundControl} className="correct">Correct</button>
                    <button onClick={this.props.roundControl} className="incorrect">Incorrect</button>
                </div>
                <button hidden={this.props.roundEnded}  onClick={this.props.roundControl} className="bankButton">Bank</button>
                <div hidden={this.props.roundEnded} className="roundControl">
                    <button disabled={this.props.roundStarted} onClick={this.props.roundControl} className={this.props.roundStarted?"roundButtonInProgress":"roundButton"}>Start Round</button>
                    <button onClick={this.props.roundControl} className="roundButton">Pause Round</button>
                    
                </div>
                <h3 hidden={this.props.roundEnded}  className="timer">Timer: {this.props.timeOnTimer}s</h3>
                <h1 className="moneyWon" hidden={!this.props.roundEnded}>Money Won: £{this.props.bankAmount}</h1>
            </div>
        )
    }

}

export default ControlPanel;