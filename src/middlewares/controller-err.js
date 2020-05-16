
export function ControllerErr(err, res) {
    if (err.name === 'ValidationError') {
        res.status(400).send(err)
    } else {
        res.status(500).send(err)
    }
}