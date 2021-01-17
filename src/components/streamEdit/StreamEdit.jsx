import React from "react";
import {connect} from "react-redux";

import StreamForm from "../streamForm/StreamForm";
import {getStream, updateStream} from "../../redux/actionCreators/actionCreator";

class StreamEdit extends React.Component {
    componentDidMount () {
        const {id} = this.props.match.params;

        this.props.getStream(id)
    }

    onSubmit = (formValues) => {
        const {id} = this.props.match.params;

        this.props.updateStream(id, formValues)
    }
    
    render () {
        if(!this.props.stream){
            return null;
        }
        
        const {title, description} = this.props.stream;
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    initialValues={{title: `${title}`, description: `${description}`}} 
                    onSubmit={this.onSubmit} 
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const Id = ownProps.match.params.id;
    return {stream: state.streams[Id]}
}

export default connect(mapStateToProps, {getStream, updateStream})(StreamEdit);