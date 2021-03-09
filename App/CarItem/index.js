import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import styles from "./style";
import StyledButton from '../StyledButton'

function CarItem(props) {

    const { name, tagline, taglineCTA, image } = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.carContainerBG} />
            <View style={styles.titles}>
                <Text style={styles.title}> {name}</Text>
                <Text style={styles.subTitle}> {tagline} {' '}
                    <Text style={styles.subTitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton type='primary' label='Custom Order' onPress={() => { console.warn('one') }} />
                <StyledButton type='secondary' label='Existing Inventory' onPress={() => { console.warn('two') }} />
            </View>
        </View>
    )
}

CarItem.propTypes = {

}

export default CarItem