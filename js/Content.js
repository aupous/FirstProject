import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const baseUrl =
  "https://www.foody.vn/__get/Place/HomeBrowseTableNow?t=1513098063371&Count=10&Page=1&SortType=1&CategoryId=0&Lat=0&Lon=0";

class Content extends React.Component {
  state = {
    data: []
  };
  loadData = async () => {
    try {
      const header = { "X-Requested-With": "XMLHttpRequest" };
      const respond = await axios.get(baseUrl, { headers: header });
      this.setState(() => {
        return {
          data: respond.data.Items
        };
      });
    } catch (e) {
      console.log(e);
    }
  };
  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.Avatar }} />
        <Text style={styles.name}>{item.Name}</Text>
        <Text style={styles.text}>{item.Address}</Text>
        <View style={styles.line} />
        <View style={styles.deal}>
          <View style={styles.circle}>
            <FontAwesome name={"tag"} size={20} color={"white"} />
          </View>
          <Text style={styles.dealText}>{item.DealInfo}</Text>
        </View>
      </View>
    );
  };
  async componentDidMount() {
    await this.loadData();
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.data.length === 0 ? (
          <Text>Loading data</Text>
        ) : (
          <FlatList
            vertical
            data={this.state.data}
            keyExtractor={item => item.Id}
            renderItem={this.renderItem}
          />
        )}
      </ScrollView>
    );
  }
}
const styles = {
  container: {
    backgroundColor: "#D7D7D7"
  },
  item: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 3
  },
  image: {
    marginTop: 3,
    marginRight: 3,
    marginLeft: 3,
    width: width - 26,
    height: 200
  },
  name: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "gray",
    marginTop: 10
  },
  line: {
    width: width,
    height: 1,
    backgroundColor: "#C2C2C2",
    marginTop: 10
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  deal: {
    marginTop: 10,
    flexDirection: "row",
    height: 40,
    width: width
  },
  dealText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
};
export default Content;
