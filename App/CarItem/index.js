import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import styles from "./style";
import { ModelS } from '../config'

import StyledButton from '../StyledButton'

function CarItem(props) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={ModelS} style={styles.carContainerBG} />
            <View style={styles.titles}>
                <Text style={styles.title}> Model S</Text>
                <Text style={styles.subTitle}> Starting at $30,000</Text>
            </View>

            <StyledButton type='primary' label='Custom Order' />
            <StyledButton type='secondary' label='Existing Inventory' />
        </View>
    )
}

CarItem.propTypes = {

}

export default CarItem