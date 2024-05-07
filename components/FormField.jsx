import { Text, TextInput, TouchableOpacity, View } from 'react-native'
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
                    placeHolderTextColor="7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title==='password' && !showPassword}
                />
                {
                    title === 'Password' && (
                        <TouchableOpacity 
                            className="w-6 h-6"
                            resizeMode="contain"
                            onPress={() => setShowPassword(prev => !prev)}
                        >
                            <Image
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