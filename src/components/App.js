import React from "react";
import MoneyTable from "./MoneyTable";
import Bank from "./Bank";
import ControlPanel from "./ControlPanel";

import $ from "jquery";

class App extends React.Component{

    state = {
        question: "",
        correctAnswer: "",
        bankAmount: 0,
        currentMoney: 0,
        timeOnTimer: "180",
        roundTime: 180,
        answers: "",
        roundStated: false,
        roundEnded: false
    }


    //Helper function to decode HTML special chars
    decode(text){
        return new DOMParser().parseFromString(text,"text/html").documentElement.textContent;
    }

    //Used to shuffle the answers so correct answer is in a random place
    shuffleArray(array){
        var count = array.length,
            randomnumber,
            temp;
        while( count ){
            randomnumber = Math.random() * count-- | 0;
            temp = array[count];
            array[count] = array[randomnumber];
            array[randomnumber] = temp;
        }
        return array;
    }


    getQuestion = () => {
        var qData;
        var cats = ["9"];
        var chosenCat = cats[Math.floor(Math.random() * cats.length)];
        fetch("https://opentdb.com/api.php?amount=1&type=multiple&category="+chosenCat).then(res => res.json()).then((jsonData) => {
            qData = jsonData.results[0];
            var incorrectAnswers = qData.incorrect_answers.map(e=>this.decode(e));
            var allAnswers = incorrectAnswers;
            allAnswers.push(this.decode(qData.correct_answer));
            for(var i=0;i<allAnswers.length;i++){
                allAnswers[i] = this.decode(allAnswers[i]);
            }

            allAnswers = this.shuffleArray(allAnswers);

            var answersString = "";

            for(var i=0;i<allAnswers.length;i++){
                answersString+=allAnswers[i]+", "
            }

            this.setState({
                question: this.decode(qData.question),
                correctAnswer: this.decode(qData.correct_answer),
                answers: answersString
            })
        })
    }

    roundControl = (e) => {
        var opt = e.target.textContent;
        // eslint-disable-next-line default-case
        switch(opt){
            case "Correct":
                this.setState({
                    currentMoney: this.state.currentMoney + 1
                });
                if(this.state.currentMoney == 11){
                    this.setState({
                        currentMoney: 10
                    })
                }
                this.getQuestion();
            break;
            case "Incorrect":
                this.setState({
                    currentMoney: 0
                });
                this.getQuestion();
            break;
            case "Bank":
                this.bankMoney(this.state.currentMoney);
            break;
            case "Start Round":
                this.getQuestion();
                this.startRound();
            break;
            case "Pause Round":
            break;
        }
    }

    bankMoney(bankedMoney){
        var moneyToBank;
        // eslint-disable-next-line default-case
        switch(bankedMoney){
            case 0:
                moneyToBank = 0;
                break;
            case 1:
                moneyToBank = 20;
                break;
            case 2:
                moneyToBank = 50;
                break;
            case 3:
                moneyToBank = 100;
                break;
            case 4:
                moneyToBank = 200;
                break;
            case 5:
                moneyToBank = 300;
                break;
            case 6: 
                moneyToBank = 450;
                break;
            case 7:
                moneyToBank = 600;
                break;
            case 8:
                moneyToBank = 800;
                break;
            case 9:
                moneyToBank = 1000;
                break;
        }
        this.setState({
            bankAmount: this.state.bankAmount + moneyToBank,
            currentMoney: 0
        })
    }

    startRound = () => {
        this.getQuestion();
        this.setState({
            roundStated: true
        })
        var duration = this.state.roundTime;
        var timerInt = setInterval(() => {
            duration--
            
            if(duration === 0){
                clearInterval(timerInt);
                this.endRound();
            }

            this.setState({
                timeOnTimer: duration
            })
        }, 1000);   
    }

    endRound = () => {
        this.setState({
            roundEnded: true,
            question: "ROUND OVER"
        })
    }

    render(){
        return(
            <div className="appContainer">
                <div className="leftCol">
                    <h1 className="title">Weakest Link</h1>
                    <MoneyTable currentMoney={this.state.currentMoney}/>
                    <Bank bankAmount={this.state.bankAmount}/>
                </div>
                <div className="rightCol">
                    <ControlPanel bankAmount={this.state.bankAmount} roundEnded={this.state.roundEnded} roundStarted={this.state.roundStated} answers={this.state.answers} timeOnTimer={this.state.timeOnTimer} question={this.state.question} correctAnswer={this.state.correctAnswer} roundControl={this.roundControl}/>
                </div>
            </div>
        )
    }

}

export default App;