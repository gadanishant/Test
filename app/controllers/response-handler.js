export const setResponse = (data, res) => {
    // res.status(200).json(data);
    res.status(200).json({
        "success": true,
        "description": data
    });
}

export const badRequest = (err, res) => {
    res.status(400).json({
        code: "Bad Request",
        message: err
    });
}

export const setErrorResponse = (err, res) => {
    console.log("err => ", err);
    res.status(500).json({
        code: "ServiceError",
        message: "Server Down!"
    });
}