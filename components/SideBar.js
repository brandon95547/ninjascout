import React from "react";
import { Text, AsyncStorage, TouchableOpacity, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Left,
  Right,
  Icon,
  List,
  ListItem,
} from "native-base";
import { componentStyles, colors } from "../src/GlobalStyles";
import UserContext from "../UserContext";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("sidebar", this.props);
  }

  logOut = async function () {
    let _this = this;
    try {
      const { user, setUser, setCartData } = this.context;
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      setUser(null);
      setCartData([]);
      setTimeout(() => {
        alert("Logout successful");
        _this.props.navigation.navigate("Home");
        _this.props.toggleOpen();
      }, 500);
    } catch (error) {
      console.error("Error clearing app data.");
    }
  };

  static contextType = UserContext;

  render() {
    const { user } = this.context;

    let continueButton = user ? "Cart" : "Login";

    const adminLink =
      user !== null &&
      (user.user_name == "houndsdriveintheater@gmail.com" ||
        user.user_name == "brandon95547@gmail.com") ? (
        <ListItem>
          <Left>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Admin");
              }}
            >
              <Text>Admin</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={() => {
                this.props.navigation.navigate("Admin");
              }}
              type="FontAwesome"
              name="lock"
            />
          </Right>
        </ListItem>
      ) : (
        <></>
      );

    const loginLink =
      user !== null ? (
        <ListItem>
          <Left>
            <TouchableOpacity
              onPress={() => {
                this.logOut();
              }}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={() => {
                this.logOut();
              }}
              type="FontAwesome"
              name="lock"
            />
          </Right>
        </ListItem>
      ) : (
        <></>
      );

    return (
      <List style={{ marginTop: 80 }}>
        <ListItem selected>
          <Left>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={this.props.toggleOpen}
            >
              <Text>Close Menu</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={this.props.toggleOpen}
              type="FontAwesome"
              name="close"
            />
          </Right>
        </ListItem>
        <ListItem selected>
          <Left>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Text>Home</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
              type="FontAwesome"
              name="home"
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate("MyOrders");
              }}
            >
              <Text>My Orders</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={() => {
                this.props.navigation.navigate("MyOrders");
              }}
              type="FontAwesome5"
              name="clipboard-list"
            />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                this.props.navigation.navigate(continueButton);
              }}
            >
              <Text>Cart</Text>
            </TouchableOpacity>
          </Left>
          <Right>
            <Icon
              style={{ color: colors.primary, padding: 6 }}
              onPress={() => {
                this.props.navigation.navigate("Cart");
              }}
              type="MaterialCommunityIcons"
              name="cart"
            />
          </Right>
        </ListItem>
        {loginLink}
      </List>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
});
