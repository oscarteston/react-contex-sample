import React, { Component } from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext'



export class App extends Component {
    state = {
        language: 'english'
    };

    onLanguagechange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            <div className='ui container'>
                <div>
                    Select a language:
                    <i className='flag us' onClick={() => this.onLanguagechange('english')} />
                    <i className='flag nl' onClick={() => this.onLanguagechange('dutch')} />
                </div>
                <ColorContext.Provider value={'red'}>
                    <LanguageContext.Provider value={this.state.language}>
                            <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;
