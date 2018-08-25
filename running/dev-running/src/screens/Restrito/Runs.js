import React from 'react'
import { connect } from 'react-redux'
import { getRuns } from '../../reducers/actions/runs'
import { Table } from 'semantic-ui-react'
import Duration from "../Elements/Duration";
import Distance from '../Elements/Distance'

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
                <Table.Cell><Duration duration={run.duration} /></Table.Cell>
                <Table.Cell><Distance distance={run.distance} form={"metric"}/></Table.Cell>
                <Table.Cell>{formatterDate}</Table.Cell>
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
                            <Table.HeaderCell>distância</Table.HeaderCell>
                            <Table.HeaderCell>Criado</Table.HeaderCell>
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