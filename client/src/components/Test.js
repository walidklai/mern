import React, { useEffect } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Input
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { fetchData } from '../redux/actions'
import { connect } from 'react-redux'

const ShoppingList = (props) => {
    useEffect(() => {
        props.fetchData()
    }, [])
    return (
        <div>
            <Container>
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        <div>
                            
                        {
                            (props.itemsList.loading) ?
                                <h2>Loading....</h2>
                                //: props.itemsList.loading === false ? <h2>HEEEHIII FALSEEEEEEEE{}</h2>
                                    :
                                    <TransitionGroup timeout={500}>
                                        {props.itemsList.items.map((el, i) => (
                                        <CSSTransition key={i} timeout={500} classNames='fade'>
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
                                                    onClick={() => console.log('click delete', el._id)}>&times;
                                        </Button>
                                            </ListGroupItem>

                                        </CSSTransition>

                                    ))}
                                    </TransitionGroup>
                                    
                        }
                        </div>
                        
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


export default connect(mapStateToProps, { fetchData })(ShoppingList)