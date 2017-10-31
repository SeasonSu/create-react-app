import React, {Component} from 'react'
class clickCounter extends Component {
    constructor(props){
        super(props)
        this.onClickButton = this.onClickButton.bind(this)
        this.state = {count:0}
    }
    onClickButton(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return (
            <div>
                <button onClick={this.onClickButton}>clickMe</button>
                <div>
                click count : {this.state.count}
                </div>
            </div>
        )
    }
}

export default clickCounter
