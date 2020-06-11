import _ from "lodash";

const formatGraphQLErrors = error => {
    const errorDetails = _.get(error, "originalError.response.body");
    // const errorName = _.get(error, "originalError.response.body.error.name");
    // const fullError = _.get(error, "originalError.response.body.error.errors");
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch(e) {}

    return error;
}

export default formatGraphQLErrors;