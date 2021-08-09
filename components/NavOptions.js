import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const data = [
  {
    id: "153",
    title: "Get a ride",
    image: "https://i.ibb.co/XC8T0FV/car.png",
    screen: "MapScreen",
  },
  {
    id: "415",
    title: "Order food",
    image: "https://i.ibb.co/cwFXVbQ/uber-food.png",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
