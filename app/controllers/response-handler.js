export const setResponse = (data, res) => {
    res.status(200).json(data);
}

export const badRequest = (err, res) => {
    console.log("badRequest: err => ", err);
    res.status(400).json({
        code: "Bad Request",
        message: "One or more required parameters are missing!"
    });
}

export const setErrorResponse = (err, res) => {
    console.log("err => ", err);
    res.status(500).json({
        code: "ServiceError",
        message: "Error occured while saving course"
    });
}