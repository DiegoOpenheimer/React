import React from 'react'
import { connect } from 'react-redux'
import { getRuns } from '../../reducers/actions/runs'

class Runs extends React.Component {

    componentWillMount() {
        this.props.getRuns()
    }

    renderBody = (run) => {
        const date = new Date(run.created)
        const formatterDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
        return(
            <tr key={run.id}>
                <td>{run.friendly_name}</td>
                <td>{run.duration}</td>
                <td>{formatterDate}</td>
                <td>{run.distance}</td>
            </tr>
        )
    }

    render() {
        console.log(this.props.runs)
        return(
            <div>
                <h1>Runs</h1>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duração</th>
                            <th>Criado</th>
                            <th>distância</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.runs && this.props.runs.map(this.renderBody)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    table: {
        border: '1px solid #000',
        borderCollpase: 'collapse',
        tableLayout: 'fixed',
        width: '80%',
        margin: 'auto'
    }
}

const mapStateToProps = state => {
    return {
        runs: state.reducerRuns.runs
    }
}

export default connect(mapStateToProps, { getRuns })(Runs)