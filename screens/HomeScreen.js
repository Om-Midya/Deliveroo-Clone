import {Image, Text, TextInput, View} from "react-native";
import React, {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import NativeSafeAreaView from "react-native-safe-area-context/src/specs/NativeSafeAreaView";
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";




function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    return (
        <NativeSafeAreaView className="bg-white">
            {/* Header */}

            <View className="flex-row pb-3 items-center mx-3 space-x-3">
                <Image
                    source= {{
                    uri: "https://links.papareact.com/wru",
                    }}
                    className = "h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-sm">Deliver Now!</Text>
                    <Text className="font-bold text-black text-2xl">Current Location
                        <ChevronDownIcon size={15} color="#00CCBB"/>
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB"/>
            </View>

         {/* Search Bar */}

            <View className="flex-row items-center space-x-2n pb-2 mx-4">
                <View className="flex-row space-x-2 p-2 bg-gray-200 items-center flex-1">
                    <MagnifyingGlassIcon size={20} color="gray"/>
                    <TextInput placeholder="Restaurants and Cuisine" keyboardType="default"></TextInput>
                </View>
                <AdjustmentsVerticalIcon size={25} color="#00CCBB"/>
            </View>
            
            {/* Body */}

            <ScrollView className="bg-slate-100">

                {/* Categories */}
                    <Category/>

                {/* Featured Rows */}

                    <FeaturedRow
                        id = "1"
                        title = "Featured"
                        description = "Paid Placements from our partners"
                    />
                    
                    <FeaturedRow
                        id = "2"
                        title = "Tasty Discounts"
                        description = "Everyone's enjoying on the juicy discounts"
                    />
                
                    <FeaturedRow
                        id = "3"
                        title = "Offers Near You"
                        description = "Why not support your local restuarant tonight"
                    />
                

            </ScrollView>

        </NativeSafeAreaView>
    );
}

export default HomeScreen

