import React from 'react'
import { connect } from 'react-redux'
import { getRuns } from '../../reducers/actions/runs'
import { Table } from 'semantic-ui-react'

class Runs extends React.Component {

    componentWillMount() {
        this.props.getRuns()
    }

    renderBody = (run) => {
        const date = new Date(run.created)
        const formatterDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
        return(
            <Table.Row key={run.id}>
                <Table.Cell>{run.friendly_name}</Table.Cell>
                <Table.Cell>{run.duration}</Table.Cell>
                <Table.Cell>{formatterDate}</Table.Cell>
                <Table.Cell>{run.distance}</Table.Cell>
            </Table.Row>
        )
    }

    render() {
        return(
            <div>
                <h1>Runs</h1>
                <Table color="red" celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Duração</Table.HeaderCell>
                            <Table.HeaderCell>Criado</Table.HeaderCell>
                            <Table.HeaderCell>distância</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.runs && this.props.runs.map(this.renderBody)}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs: state.reducerRuns.runs
    }
}

export default connect(mapStateToProps, { getRuns })(Runs)