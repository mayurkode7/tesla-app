import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

function StyledButton(props) {
    const { type, label, onPress } = props;
    const bgColor = type === 'primary' ? '#171A20CC' : '#FFFFFF'
    const txtColor = type === 'primary' ? '#FFFFFF' : '#171A20'


    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: bgColor }]}
                onPress={onPress}
            >
                <Text style={[styles.text, { color: txtColor }]}>{label}</Text>
            </Pressable>
        </View>

    )
}

export default StyledButton
