import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        zIndex: 100,     // works for iOS
        elevation: 100, // works for android
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 10,
    }
})

export default styles