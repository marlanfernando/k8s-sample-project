import React, {Component} from 'react';
import axios from 'axios';

class Fib extends Component {
    
    state = {
        seenIndex : [],
        values : {},
        index : ''

    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({values : values.data});
    }

    async fetchIndexes() {
        const indexes = await axios.get('/api/values/all');
        this.setState({seenIndex : indexes.data});
    }

    renderSeenIndexes() {
        return this.state.seenIndex.map(({number}) => number ).join(", ");
    }

    renderValues() {
        const entries = [];

        for (let key in this.state.values) {
            entries.push(
                <div>
                    For index {key} I Calculated value {this.state.values[key]}
                </div>
            );
        }

        return entries;
    }

    // bound function: read about this
    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('/api/values', {
            index: this.state.index
        });

        this.setState({index: ''});

    };

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>Enter your index:</label>
              <input
                value={this.state.index}
                onChange={(event) => this.setState({ index: event.target.value })}
              />
              <button>Submit</button>
            </form>
    
            <h3>Indexes I have seen:</h3>
            {this.renderSeenIndexes()}
    
            <h3>Calculated Values:</h3>
            {this.renderValues()}
          </div>
        );
      }
}

export default Fib;