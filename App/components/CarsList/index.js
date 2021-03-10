import React from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import PropTypes from 'prop-types'

import CarItem from '../../CarItem'
import cars from './cars'
import styles from './style'

function CarsList(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

CarsList.propTypes = {

}

export default CarsList

