import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';

import { AutoComplete } from 'antd';
const { Option } = AutoComplete;


const GET_LEARNING_PATHS = gql`
    query getLearningPaths($searchString: String!) {
        learningPathSearch(searchString: $searchString) {
            id
            name
            description
        }
    }
`;

const AutoCompleteSearch = ({ width = '100%' }) => {
    const [searchString, setSearchString] = useState("")
    const { data, loading, error } = useQuery(GET_LEARNING_PATHS, { variables: { searchString } })

    const search = value => setSearchString(value)

   

    return (
        <AutoComplete
            style={{ width }}
            placeholder="Search a learning path"
            onSearch={search}
        >
            {data && data.learningPathSearch.map(r => (
                <Option key={r.id} value={r.name}>
                    <Link to={`learning-path/id/${r.id}`}>{r.name}</Link>
                </Option>
            ))}
        </AutoComplete>
    )
}

AutoCompleteSearch.propTypes = {

}

export default AutoCompleteSearch
