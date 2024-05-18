import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>
            <View className="border-2 border-black-200 rounded-2xl w-full h-16 px-4 bg-black-100 focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title==='Password' && !showPassword}
                />
                {
                    title === 'Password' && (
                        <TouchableOpacity
                            className="w-8 h-8 flex items-center justify-center"
                            onPress={() => setShowPassword(prev => !prev)}
                        >
                            <Image
                                className="w-full h-full"
                                resizeMode="contain"
                                source={showPassword ? icons.eyeHide : icons.eye}
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </View>
    )
}

export default FormField