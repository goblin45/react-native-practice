import { Text, View, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import { useState } from 'react'

const SignIn = () => {

	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-cneter min-h-[85vh] px-4 my-6">
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115px] h-[35px]"
					/>
					<Text className="text-2xl text-white text-psemibold text-semibold mt-10">
						Log in to Aora
					</Text>
					<FormField
						title='email'
						value={form.email}
						handelChangeText={e => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
					<FormField
						title='password'
						value={form.password}
						handelChangeText={e => setForm({ ...form, password: e })}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SignIn