import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'

import CarItem from '../../CarItem'
import cars from './cars'
import styles from './style'

function CarsList(props) {
    return (
        <View style={styles.container}>
            <FlatList data={cars}
                renderItem={({ item }) => <CarItem car={item} />} />
        </View>
    )
}

CarsList.propTypes = {

}

export default CarsList

