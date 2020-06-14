import _ from "lodash";

const formatSequelizeError = error => {
    const errorName = _.get(error, "name");
    const errorMessage = _.get(error, "errors[0].message");
    // const errorName = _.get(error, "originalError.response.body.error.name");
    // const fullError = _.get(error, "originalError.response.body.error.errors");

    if (!errorName || !errorMessage) return error;
    try {
        let newError = {}
        if (errorName) newError.name = errorName;
        if (errorMessage) newError.message = error.message + ": " + errorMessage;
        return newError;
    } catch(e) {}

    return error;
}

export default formatSequelizeError;