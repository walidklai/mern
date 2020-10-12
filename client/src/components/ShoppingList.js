import React, { useEffect } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Input
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { fetchData, deleteData } from '../redux/actions'
import { connect } from 'react-redux'

const ShoppingList = (props) => {
    useEffect(() => {
        props.fetchData()
    }, [])

    const handleRm = (id) => {
        props.deleteData(id)
    }

    return (
        <div>
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        {
                            (props.itemsList.loading) ?
                                <h2>Loading....</h2>
                                //: props.itemsList.loading === false ? <h2>HEEEHIII FALSEEEEEEEE{}</h2>
                                :
                                props.itemsList.items.map(el => (
                                    <CSSTransition key={el._id} timeout={500} classNames='fade'>
                                        <ListGroupItem style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                            className='w-50'
                                        >
                                            {el.name}
                                            <Button
                                                className='remove-btn'
                                                color='danger'
                                                size='sm'
                                                onClick={()=>handleRm(el._id)}>&times;
                                        </Button>
                                        </ListGroupItem>

                                    </CSSTransition>
                                ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsList: state.shopping
    }
}


export default connect(mapStateToProps, { fetchData, deleteData })(ShoppingList)