import {Text, TouchableOpacity, View, Image, ImageComponent } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source= {{
          uri: props.img,
        }}
        className = "h-20 w-20 bg-gray-300 rounded-md"
      />
      <Text className="left-1  absolute bottom-1 text-white font-bold">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard