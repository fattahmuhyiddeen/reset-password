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
    forgotPasswordToken: ''
  }

  componentDidMount() {
    // const data = queryString.parse(window.location.href)
    const data = queryString.parseUrl(window.location.href)
    // alert(JSON.stringify(data))
    if (data.query) {
      this.setState({ email: data.query.e.replace("%40", "@"), forgotPasswordToken: data.query.k })
    }
  }

  resendPassword = () => {
    const { email, password, repassword } = this.state
    if (password === '') {
      return alert("Please enter password")
    }
    if (password !== repassword) {
      return alert("Password did not match")
    }
    fetch('http://54.169.122.165/forget', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    }).then((r) => {
      if (r.status === 200) {
        alert("Success, please go to your app to login using " + email + " with your new password")
      } else {
        // const res = r.json()
        alert("Sorry, please try later")

        // alert(JSON.stringify(res.message))
      }
      // 
    }).catch((e) => {
      console.log(e)
      alert("Sorry, please try later")
    });
  }
  onChange = (type, value) => this.setState({ [type]: value })


  handleFocus = (event) => event.target.select()

  render() {
    const { password, repassword } = this.state
    return (
      <div>
        <div style={styles.inputContainer} >Password : <input type="password" onFocus={this.handleFocus} onChange={(e) => this.onChange('password', e.target.value)} value={password} /></div>
        <div style={styles.inputContainer} >Retype Password : <input type="password" onFocus={this.handleFocus} onChange={(e) => this.onChange('repassword', e.target.value)} value={repassword} /></div>
        <div style={styles.button} onClick={this.resendPassword}>Proceed</div>
      </div>
    );
  }
}