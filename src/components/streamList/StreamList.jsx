import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStreams } from "../../redux/actionCreators/actionCreator";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.getStreams();
    }

    renderCreateBtn = () => {
        if(this.props.isSignedIn){
            return (
                <div>
                    <Link to="/streams/new" className="btn btn-success">Create Stream</Link>
                </div>
            )
        }
    }

    renderEditDeleteBtn = (stream) => {
        if (this.props.userID  === stream.userId) {
            return (
                <div>
                    <Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">Edit</Link>{" "}
                    <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">Delete</Link>
                </div>
            )
        }
    }

    renderList = () => {
        return (
            this.props.streams.map(stream => (
                <div className="row mb-2" key={stream.id}>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6">
                        <h5>{stream.title}</h5>
                        <p>{stream.description}</p>
                    </div>
                    <div className="col-md-2">
                        {this.renderEditDeleteBtn(stream)}
                    </div>
                </div>
            ))
        )
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                {this.renderList()}
                <div style = {{textAlign: "center"}}>
                    {this.renderCreateBtn()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userID: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {getStreams})(StreamList);