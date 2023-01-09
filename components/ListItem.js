import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const ListItem = ({singleMedia}) => {
  const item = singleMedia;
  return (
    <TouchableOpacity>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: item.thumbnails.w160 }}
      />
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.PropTypes = {
  singleMedi: PropTypes.object,
};

export default ListItem;
