import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const CategoriesItems = ({ item, onSelected }) => {
  return (
    <View>
      <TouchableOpacity>
        <View>
          <Text>{item.title}</Text>
        </View>
        <View>
          <Image source={item.img} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesItems;

const styles = StyleSheet.create({});
