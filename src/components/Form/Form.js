import React, {Component} from 'react';
import './Form.css';

const agentInfo = {
    firstname: {
        value: 'james',
        error: 'Имя указано не верно',
        errorEmpty: 'Нужно указать имя!'
    },
    lastname: {
        value: 'bond',
        error: 'Фамилия указана не верно',
        errorEmpty: 'Нужно указать фамилию!'
    },
    password: {
        value: '007',
        error: 'Пароль указан не верно',
        errorEmpty: 'Нужно указать пароль!'
    }
};



export default class Form extends Component{

    state = {
        firstname: '',
        lastname: '',
        password: '',
        errors: {},
        isValid: false
    };


    onChangeInputText = e => {
        if(this.state.errors[e.target.name]){
            this.setState({
                [e.target.name]: e.target.value,
                errors: {}
            });
        } else {
            this.setState({[e.target.name]: e.target.value})
        }
    };
    
    onSubmit = e => {
        e.preventDefault();
        const errors = {};
        Object.keys(agentInfo).forEach(key=>{
            if(this.state[key] === '') {
                errors[key] = agentInfo[key].errorEmpty;
            } else if (this.state[key].toLowerCase() !== agentInfo[key].value) {
                errors[key] = agentInfo[key].error;
            }
        })
        this.setState({errors, isValid: Object.keys(errors).length === 0});
    }

    render() {
        const {firstname, lastnam, password, errors, isValid} = this.state; 
        if (!isValid) {
            return (
                <div className="app-container">
                    <form className="form" onSubmit={this.onSubmit}>
                        <h1>Введите свои данные, агент</h1>
                        <p className="field">
                            <label className="field__label" htmlFor="firstname">
                                <span className="field-label">Имя</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-firstname"
                                type="text"
                                value={firstname}
                                name="firstname"
                                onChange={this.onChangeInputText} />
                            <span className="field__error field-error t-error-firstname">{errors.firstname}</span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="lastname">
                                <span className="field-label">Фамилия</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-lastname"
                                type="text"
                                value={lastnam}
                                name="lastname"
                                onChange={this.onChangeInputText} />
                            <span className="field__error field-error t-error-lastname">{errors.lastname}</span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="password">
                                <span className="field-label">Пароль</span>
                            </label>
                            <input 
                                className="field__input field-input t-input-password"
                                type="text"
                                value={password}
                                name="password" 
                                onChange={this.onChangeInputText} />
                            <span className="field__error field-error t-error-password">{errors.password}</span>
                        </p>
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value="Проверить"/>
                        </div>
                    </form>
                </div>
            )} else {
                return( 
                    <div className="app-container">
                        <img src="https://homework-form-validation.surge.sh/static/media/bond_approve.9943a33d.jpg" alt="bond approve" className="t-bond-image"/>
                    </div>
                )
            }
    }
}
