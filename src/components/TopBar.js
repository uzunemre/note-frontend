import React from 'react';
import logo from '../assets/note-logo.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class TopBar extends React.Component {
    state = {
        dropDownVisible: false
    };

    componentDidMount() {
        document.addEventListener('click', this.onClickTracker);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickTracker);
    }

    onClickTracker = (event) => {
        if (this.actionArea && !this.actionArea.contains(event.target)) {
            this.setState({
                dropDownVisible: false
            });
        }
    };

    assignActionArea = (area) => {
        this.actionArea = area;
    };

    render() {
        let links = (
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        );
        if (this.props.user.isLoggedIn) {
            links = (
                <ul className="nav navbar-nav ml-auto" ref={this.assignActionArea}>
                    {this.props.user.displayName}
                </ul>
            );
        }
        return (
            <div className="bg-white shadow-sm mb-2">
                <div className="container">
                    <nav className="navbar navbar-light navbar-expand" style={{paddingRight: '0px'}}>
                        <Link to="/" className="navbar-brand">
                            <img src={logo} width="60" alt="NeverNote"/>
                        </Link>
                        {links}
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    };
};

export default connect(mapStateToProps)(TopBar);
