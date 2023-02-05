import { StyleSheet, Text, View } from "react-native";

import React from "react";

const ProductsScreens = () => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreens</Text>
    </View>
  );
};

export default ProductsScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifiContent: "center",
    alignItems: "center",
  },
});
