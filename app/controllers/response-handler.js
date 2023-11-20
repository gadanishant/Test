export const setResponse = (data, res) => {
    res.status(200).json(data);
}

export const setErrorResponse = (err, res) => {
    console.log("err => ", err);
    res.status(500).json({
        code: "ServiceError",
        message: "Error occured while saving course"
    });
}