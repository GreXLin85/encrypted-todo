import {ModalContainer, ModalHeader, ModalContent, Container, Row, ColFull, ModalInput} from '../assets/style/styled'

const AddModal = () => {
    return(
        <ModalContainer>
            <ModalHeader>
                Add Todo
            </ModalHeader>

            <ModalContent>
                <Container>
                    <Row>
                        <ColFull>
                            <ModalInput required placeholder="test"/>
                        </ColFull>
                    </Row>
                </Container>
            </ModalContent>
        </ModalContainer>
    )
}

export default AddModal;