import React from 'react';
import getActionTrainDetails from '../Action/search.action';
import { connect } from 'react-redux';
import store from '../store';
import {constants} from '../constants';
import DetailsComponent from './DetailsComponent';


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.textValue = React.createRef();
        this.searchClick = this.searchClick.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        this.changeText = this.changeText.bind(this);
        const{ arrmap } = this.props;
    }

    searchClick(e) {
        this.setState({
            value: e.target.value
        });
    }

    changeText(e){
        this.setState({
            value : e.target.value
        });
    }

    submitEvent(e) { 
        e.preventDefault();
        // this.setState({
        //     value: this.textValue.current.value
        // });
       // console.log('HI'+this.textValue.current.value);
        console.log(this.state.value);
        this.props.dispatch(getActionTrainDetails(this.state.value));
        console.log(this.props.isSucess);
    }

    render() {
        const{ arrmap } = this.props;
        return (
            <div class="search">
                <form>
                <input type="text" id="sid"  onChange ={this.changeText} ></input>
                <button onClick={this.submitEvent}>Submit</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(SearchComponent);

//export default SearchComponent;