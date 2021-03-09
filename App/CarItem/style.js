import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%'
    },
    carContainerBG: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    titles: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 16,
        color: '#5C5E62'
    },
    subTitleCTA: {
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        position: 'absolute',
        width: '100%',
        bottom: '5%'
    }
})

export default style