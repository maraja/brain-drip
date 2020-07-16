import _ from "lodash";
const util = require('util')

const formatGraphQLErrors = error => {
    console.log(error)
    let errorDetails = _.get(error, "originalError.response.body");
    // const errorName = _.get(error, "originalError.response.body.error.name");
    // const fullError = _.get(error, "originalError.response.body.error.errors");
    console.log(Object.keys(error))
    // console.log(error["ValidationError"])

    // if (!errorDetails) {
    //     const errorCode = _.get(error, "extensions.code");
    //     if (errorCode == 'GRAPHQL_VALIDATION_FAILED') {
    //         return {success: false, message: error.message}
    //     }
    //     if (errorCode == 'INTERNAL_SERVER_ERROR') {
    //         let message = _.get(error, 'extensions.exception.stacktrace[0]')
    //         return {success: false, message: message || "Something went wrong."}
    //     }
    // }
    console.log(errorDetails)
    try {
        // if (errorDetails) return { ...JSON.parse(errorDetails), error: undefined};
        if (errorDetails && JSON.parse(errorDetails).error) {
            errorDetails = JSON.parse(errorDetails)
            return {
                message: errorDetails.error.message || undefined,
                name: errorDetails.error.name || undefined
            }
        }
        else {
            return {
                message: error.message || undefined,
                name: error.name || undefined
            }
        }
    } catch(e) {
        return {
            message: error.message || undefined,
            name: error.name || undefined
        }
    }

    return {
        message: error.message || undefined,
        name: error.name || undefined
    }
}

export default formatGraphQLErrors;