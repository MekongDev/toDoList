import React from 'react';
import {Modal, View} from 'react-native';
import AddNew from '../screens/AddNew';

const DisplayModal = (props) => (
    <Modal
        visible={props.display}
        animationType="slide"
        onRequestClose={() => props.triggerModal()}
        >
        <AddNew
            triggerModal={props.triggerModal}
            {...props}
        />
    </Modal>
)

export default DisplayModal;