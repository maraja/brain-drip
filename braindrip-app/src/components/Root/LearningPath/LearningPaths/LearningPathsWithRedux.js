// FOR TESTING

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import { fetchPaths } from '#root/actions/learningPathActions'

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPaths = ({ dispatch, loading, paths, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchPaths())
    }, [dispatch])

    // Show loading, error, or success state
    const renderPosts = () => {
        if (loading) return <p>Loading posts...</p>
        if (hasErrors) return <p>Unable to display posts.</p>
        return paths.map(post => <div>{post.title} {post.body}</div>)
    }
    
    return (
        <Layout>
            <Container>
                {renderPosts()}
            </Container>
        </Layout>
    )
}

const mapStateToProps = state => ({
    loading: state.paths.loading,
    paths: state.paths.paths,
    hasErrors: state.paths.hasErrors,
  })
  
  export default connect(mapStateToProps)(LearningPaths)
