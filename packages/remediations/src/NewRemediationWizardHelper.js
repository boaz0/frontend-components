import React, { Component } from 'react';
import RemediationWizard from './NewRemediationWizard';

class NewRemediationWizard extends Component {

    state = {
        isOpen: false
    }

    openWizard = (data, basePath) => {
        this.setState({
            isOpen: true,
            data,
            basePath
        });
    }

    setOpen = (value) => {
        this.setState({ isOpen: value });
    }

    render () {
        return (
            this.state.isOpen
                ? <RemediationWizard
                    data={this.state.data}
                    basePath={this.state.basePath}
                    setOpen={this.setOpen}/>
                : null
        );
    }
}

export default NewRemediationWizard;
