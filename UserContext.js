import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = React.createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);
  }

  // Context state
  state = {
    user: null,
    token: null,
  };

  setUser = (user) => {
    this.setState((prevState) => ({ user }));
  };

  setToken = (token) => {
    this.setState((prevState) => ({ token }));
  };

  setAsyncStorage = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (error) {
      // Error saving data
    }
  };

  getAsyncStorage = async (key) => {
    try {
      value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      // error reading value
    }
  };

  render() {
    const { children } = this.props;
    const { user } = this.state;
    const { token } = this.state;
    const { setUser } = this;
    const { setToken } = this;
    const { setAsyncStorage } = this;
    const { getAsyncStorage } = this;

    return (
      <UserContext.Provider
        value={{
          user,
          token,
          setUser,
          setToken,
          setAsyncStorage,
          getAsyncStorage,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;

export { UserProvider };
