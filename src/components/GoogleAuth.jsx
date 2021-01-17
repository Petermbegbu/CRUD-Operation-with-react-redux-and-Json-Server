import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../redux/actionCreators/actionCreator";

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "11788441679-545l0qnmbme2vschnumqiqniji9ah8pl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        })
    }

    //The state of the Google Auth is Authomatically passed to this function
    onAuthChange = (signedInFlag) => {
        if (signedInFlag) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null){
            return null;
        } else if (this.props.isSignedIn){
            return <button onClick={this.onSignOutClick} className="btn btn-danger">Sign Out</button>
        } else {
            return <button onClick={this.onSignInClick} className="btn btn-danger">Sign In with Google</button>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);