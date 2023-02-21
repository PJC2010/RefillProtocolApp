import React from 'react';
import drugs from '../db.json'

class MedsListWithSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            results: []
        }

        this.OnSearchQueryChange = this.OnSearchQueryChange.bind(this);
        this.onSearch = this.onSearch.bind(this);

    }
    OnSearchQueryChange(e) {
        this.setState({searchQuery: e.target.value});
    }
    onSearch(){
        return()
    }
}