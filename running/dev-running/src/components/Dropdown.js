import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { destroyedSession } from '../reducers/actions/auth'
import { connect } from 'react-redux'

const MyDropdown = props => {
    return(
        <Dropdown text={props.user.name}>
            <Dropdown.Menu>
                <Dropdown.Item>Minha conta</Dropdown.Item>
                <Dropdown.Item>Trocar senha</Dropdown.Item>
                <Dropdown.Item onClick={props.destroyedSession}>Sair</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { destroyedSession })(MyDropdown)