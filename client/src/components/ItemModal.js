import React, { useState } from 'react'
import {
    Modal,
    Button,
    Input,
    Form,
    FormGroup,
    Label,
    ModalBody,
    ModalHeader
} from 'reactstrap'
import { addData } from '../redux/actions'
import { connect } from 'react-redux'

const ItemModal = (props) => {
    const [modal, setModal] = useState(false)
    const [itemName, setItemName] = useState('')
    const handleChange = (e) => {
        setItemName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            name: itemName
        }
        if (newItem.name) {
            props.addData(newItem)
            setModal(false)
        }
    }
    return (
        <div>
            <Button style={{
                marginBottom: '2rem'
            }} color='dark' onClick={() => setModal(true)}>Add Item</Button>
            <Modal isOpen={modal} toggle={() => setModal(false)}>
                <ModalHeader toggle={() => setModal(false)}>Add a new item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='item'></Label>
                            <Input
                                type='text'
                                placeholder='Item name'
                                value={itemName}
                                onChange={handleChange}
                            ></Input>
                        </FormGroup>
                        <Button
                            type='submit'
                            size='block'
                        >ok</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        newItem: state.shopping.items
    }
}

export default connect(mapStateToProps, { addData })(ItemModal)