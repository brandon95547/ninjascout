import React from "react"

export default class CreateAccount extends React.Component {
  async componentDidMount() {
    this.props.navigation.addListener('focus', async() => {
      this.props.route.params.fn()
      this.props.navigation.navigate('Home')
    })
  }

  render() {
    return (<></>)
  }
}
