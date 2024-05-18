import { Image, Text, View } from 'react-native'

import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }) => {
    return (
        <View className="justify-center items-center px-4">
            <Image
                source={images.empty} 
                className="w-full h-[200px]"
                resizeMode="contain"
            />
            <Text className="text-xl font-psemibold text-white text-center">
                {title}
            </Text>
            <Text className="font-pmedium text-sm text-gray-100 mt-2">
                {subtitle}
            </Text>

            <CustomButton
                title="Create Video"
                handlePress={() => router.push('/create')}
                containerStyles='w-full my-5'
            />
        </View>
    )
}

export default EmptyState