import React from "react";

class ControlPanel extends React.Component{

    render(){
        return(
            <div className="controlPanelContainer">
                <div className="questionContainer">
                    <h2>{this.props.question}</h2>
                </div>
                <div hidden={this.props.roundEnded} className="answerContainer">
                    <div className="answersArea">
                        <div className="answerBox">
                            <p>{this.props.answers[0]}</p>
                        </div>
                        <div className="answerBox">
                            <p>{this.props.answers[1]}</p>
                        </div>
                        <div className="answerBox">
                            <p>{this.props.answers[2]}</p>
                        </div>
                        <div className="answerBox">
                            <p>{this.props.answers[3]}</p>
                        </div>
                    </div>
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