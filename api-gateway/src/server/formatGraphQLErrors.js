import _ from "lodash";

const formatGraphQLErrors = error => {
    console.log(error)
    let errorDetails = _.get(error, "originalError.response.body");
    // const errorName = _.get(error, "originalError.response.body.error.name");
    // const fullError = _.get(error, "originalError.response.body.error.errors");
    console.log(errorDetails)
    try {
        if (errorDetails) return JSON.parse(errorDetails);
        // else {
        //     errorDetails = error.errors[0]
        //     console.log(errorDetails)
        // }
    } catch(e) {}

    return JSON.parse({message: error.message});
}

export default formatGraphQLErrors;