import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Appartement, Salon de Provence",
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Agency, Aix en Provence",
  },
  {
    id: "3",
    icon: "airplane",
    location: "Travel",
    destination: "Aéroport Marseille Provence, Marignane",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.8 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-4`}
            name={item.icon}
            type="ionicon"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
