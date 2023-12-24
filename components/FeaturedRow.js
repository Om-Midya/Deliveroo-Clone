import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = (props) => {
  return (
    <View className="p-1 px-1">
      <View className="flex-row  items-center justify-between px-4">
        <Text className="text-xl font-bold">{props.title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB"/>
      </View>
      <Text className="text-gray-500 px-4 pb-1 text-xs">{props.description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        className=""
      >
        {/* Restaurant Cards */}

        <RestaurantCard
          id = "1"
          imgURL = "https://i.pinimg.com/564x/db/17/ae/db17aeabcaf486c798cc3c4abb253468.jpg"
          title = "Dada Boudi Biriyani"
          rating = {4.9}
          genre = "Bengali"
          address = "Street 310, Newtown"
          short_desc = "World's best Biriyani Served here!"
          dishes = ""
          lat = {0.0}
          long = {0.0}
        />

        <RestaurantCard
          id = "1"
          imgURL = "https://i.pinimg.com/564x/db/17/ae/db17aeabcaf486c798cc3c4abb253468.jpg"
          title = "Dada Boudi Biriyani"
          rating = {4.9}
          genre = "Bengali"
          address = "Street 310, Newtown"
          short_desc = "World's best Biriyani Served here!"
          dishes = ""
          lat = {0.0}
          long = {0.0}
        />

        <RestaurantCard
          id = "1"
          imgURL = "https://i.pinimg.com/564x/db/17/ae/db17aeabcaf486c798cc3c4abb253468.jpg"
          title = "Dada Boudi Biriyani"
          rating = {4.9}
          genre = "Bengali"
          address = "Street 310, Newtown"
          short_desc = "World's best Biriyani Served here!"
          dishes = ""
          lat = {0.0}
          long = {0.0}
        />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow