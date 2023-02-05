import { Button, StyleSheet, Text, View } from "react-native";

import CategoriesItems from "../components/CategoriesItems";
import React from "react";

const CategoriesScreens = () => {
  return (
    <View style={styles.container}>
      <CategoriesItems />
      <Text>CategoriesScreens</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

export default CategoriesScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifiContent: "center",
    alignItems: "center",
  },
});
