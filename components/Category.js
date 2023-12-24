import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import TestImg from "../Images/foodTest.jpg"

const Category = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal 
    showsVerticalScrollIndicator={false}>

        {/* CategoryCard */}

        <CategoryCard
            img = "https://i.pinimg.com/564x/ed/b3/c1/edb3c1f7e524f943d3317ce667a9bff4.jpg"
            title = "Testing 1"
        />
        <CategoryCard
            img = "https://i.pinimg.com/564x/ed/b3/c1/edb3c1f7e524f943d3317ce667a9bff4.jpg"
            title = "Testing 2"
        />
        <CategoryCard
            img = "https://i.pinimg.com/564x/ed/b3/c1/edb3c1f7e524f943d3317ce667a9bff4.jpg"
            title = "Testing 3"
        />
        <CategoryCard
            img = "https://i.pinimg.com/564x/ed/b3/c1/edb3c1f7e524f943d3317ce667a9bff4.jpg"
            title = "Testing 4"
        />

      <Text></Text>
    </ScrollView>
  )
}

export default Category