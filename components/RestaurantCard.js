import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const RestaurantCard = (props) => {
  return (
    <TouchableOpacity className="bg-white p-2 mr-2 shadow-sm">
        <Image
            source={{
                uri: props.imgURL,
            }}
            className="h-32 w-64 rounded-md"
        />
        
        <View>
            <Text className="font-bold text-lg">{props.title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="text-gray-500 text-s">
                    <Text className="text-green-500">{props.rating}</Text> . {props.genre}
                </Text>
            </View>
        
        </View>

        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.5} size={22}/>
            <Text className="text-gray-500 text-s">{props.address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard