import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import history from "../../history";
import DeleteModal from "../modals/DeleteModal";
import {getStream, deleteStream} from "../../redux/actionCreators/actionCreator";

class StreamDelete extends React.Component {
    componentDidMount () {
        const {id} = this.props.match.params;
        
        this.props.getStream(id);
    }

    renderAction = () => {
        const {id} = this.props.match.params;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if(this.props.stream) {
            return `Delete Stream ${this.props.stream.title} ?`;
        }
        
    }
    
    render () {
        return (
            <div>
                <DeleteModal 
                    title="Delete Stream" 
                    content={this.renderContent()}
                    action={this.renderAction()}
                    onDismiss={() => history.push("/")}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    return {
        stream: state.streams[id]
    }
}

export default connect(mapStateToProps, {getStream, deleteStream})(StreamDelete);