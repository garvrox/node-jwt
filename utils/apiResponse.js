module.exports = {
    successResponse: (data, res) => {
        return res.status(200).json({
            ...data,
            success: true
        })
    },
    errorResponse: (data, res) => {
        return res.status(500).json({
            ...data,
            success: false
        })
    }
}