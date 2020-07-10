import { connect } from "react-redux";
import React from "react";
import { constants } from '../constants';
import { Card } from "react-bootstrap";

class DetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: []

        };
        console.log('details component', this.state.detail);
        this.renderDetails = this.renderDetails.bind(this);
    }

    componentDidMount() {
        var details = this.props.sr;
        console.log(details);
    }

    renderDetails() {
        return this.props.sr && this.props.sr.data.map((x) => {
            return (
                <li>x.train_num</li>
            )
        })
    }



    render() {
        //  const { details } = this.props;
        console.log(this.props.sr);
        const dt = this.props.sr.data;
        console.log(dt);
        return (
            <div>
                <h2>{dt && dt.IsSuccess ? constants.SHOW_TRAIN_SUCCESS : constants.SERVICE_FAILED} </h2>
                {dt && dt.map(x => {
                    return (
                        <Card style={{ display: 'flex', flexDirection: 'row', width:'20%', flex:'1' }}>
                    <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Title>{x.train_num}</Card.Title>
                    <Card.Title>{x.train_from}</Card.Title>
                    <Card.Title>{x.train_to}</Card.Title>       
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        )
    }
}


function mapStateToProps(state) {
    const sr = state.sr;
    console.log({ sr });
    return {
        sr
    };
}

export default connect(mapStateToProps)(DetailsComponent)
