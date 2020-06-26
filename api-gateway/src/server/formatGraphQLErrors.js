import _ from "lodash";

const formatGraphQLErrors = error => {
    console.log(error)
    let errorDetails = _.get(error, "originalError.response.body");
    // const errorName = _.get(error, "originalError.response.body.error.name");
    // const fullError = _.get(error, "originalError.response.body.error.errors");
    // console.log(Object.keys(error))
    // console.log(error["ValidationError"])

    if (!errorDetails) {
        const errorCode = _.get(error, "extensions.code");
        if (errorCode == 'GRAPHQL_VALIDATION_FAILED') {
            return {success: false, message: error.message}
        }
        if (errorCode == 'INTERNAL_SERVER_ERROR') {
            return {success: false, message: "Something went wrong."}
        }
    }
    try {
        if (errorDetails) return { ...JSON.parse(errorDetails), error: undefined};
        // else {
        //     errorDetails = error.errors[0]
        //     console.log(errorDetails)
        // }
    } catch(e) {}

    return JSON.parse({message: error.message});
}

export default formatGraphQLErrors;