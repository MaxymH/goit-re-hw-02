import React from "react"

import TwoButton from "./OnlyButton"

export default class Button extends React.Component {
    static defaultProps = {
        value: 0,
    }

    state = {
        value: this.props.value
    }




    clickOnPlus = (e) => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1
        }
        }) 
    }

    clickOnMinus = () => {
         this.setState(prevState => {
            return {
                value: prevState.value - 1
        }
        }) 
    }

    render() {
        return (
            <div>
                <span>{this.state.value }</span>
                <TwoButton
                    plus={this.clickOnPlus}
                    minus={this.clickOnMinus}
                    
            />
        </div>

        )
    }
}