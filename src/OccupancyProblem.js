import React from 'react';
import queryString from 'query-string'

const styles = {
  inputContainer: {
    margin: '10px'
  },
  button: {
    backgroundColor: 'green', borderRadius: 30, cursor: 'pointer'
  }
}
export default class App extends React.Component {
  state = {
    password: '',
    repassword: '',
    email: '',
    token: ''
  }

  componentDidMount() {
    // const data = queryString.parse(window.location.href)
    const data = queryString.parseUrl(window.location.href)
    // alert(JSON.stringify(data))
    if (data.query) {
      this.setState({ email: data.query.e, token: data.query.k })
    }
  }

  resendPassword = () => {

  }
  onChange = (type, value) => this.setState({ [type]: value })


  handleFocus = (event) => event.target.select()

  render() {
    const { password, repassword } = this.state
    return (
      <div>
        <div style={styles.inputContainer} >Password : <input onFocus={this.handleFocus} onChange={(e) => this.onChange('password', e.target.value)} value={password} /></div>
        <div style={styles.inputContainer} >Retype Password : <input onFocus={this.handleFocus} onChange={(e) => this.onChange('repassword', e.target.value)} value={repassword} /></div>
        <div style={styles.button} onClick={this.resendPassword}>Proceed</div>
      </div>
    );
  }
}