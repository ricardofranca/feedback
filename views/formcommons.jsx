import React from 'react';

const formCommons = (klass) => class extends klass {

  createFieldContainer(name, fieldLabel, type = 'text') {
    let isValid = '';
    const { messages } = this.props;
    const errors = [];
    if (Array.isArray(messages)) {
      const filtered = messages.filter(({ path }) => (path === name));
      if (filtered.length) {
        isValid = 'is-invalid';
        filtered.forEach(({ message }) => errors.push(<div>{message}</div>));
      }
    }
    return (<div
      className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${isValid}`}
    >
      <input
        autoComplete="off"
        className="mdl-textfield__input"
        type={type}
        name={name}
      />
      <label
        className="mdl-textfield__label"
        htmlFor={name}
      >
        {fieldLabel}
      </label>
      <span className="mdl-textfield__error">{errors}</span>
    </div>);
  }

  createGlobalMessage() {
    const { messages } = this.props;
    return (typeof messages === 'string') ? messages : '';
  }

  constructor(props) {
    super(props);
    this.createGlobalMessage = this.createGlobalMessage.bind(this);
    this.createFieldContainer = this.createFieldContainer.bind(this);
  }

};

export default formCommons;
