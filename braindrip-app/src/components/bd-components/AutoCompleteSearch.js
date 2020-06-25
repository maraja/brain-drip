import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from 'react-router-dom';

import { AutoComplete } from 'antd';
const { Option } = AutoComplete;

import { GET_LEARNING_PATHS } from "#root/graphql/queries"

const AutoCompleteSearch = ({ width = '100%' }) => {
    const [searchString, setSearchString] = useState("")
    const { data, loading, error } = useQuery(GET_LEARNING_PATHS, { variables: { searchString } })

    const search = value => setSearchString(value)

    // useEffect(() =>{
    //     console.log(data, loading, error)
    // })

    return (
        <AutoComplete
            style={{ width }}
            autoFocus
            placeholder="Search for a learning path"
            onSearch={search}
            // onChange={search}
        >
            {data && data.learningPathSearch.map(r => (
                <Option key={r.id} value={r.name}>
                    <Link to={`learning-path/id/${r.id}`} className="search-item">{r.name}</Link>
                </Option>
            ))}
        </AutoComplete>
    )
}

AutoCompleteSearch.propTypes = {

}

export default AutoCompleteSearch
