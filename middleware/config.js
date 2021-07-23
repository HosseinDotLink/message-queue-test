module.exports = async (req, res) => {
    try {
        res.json({
            author: "Hossein MohammadiPour << https://hossein.link >>",
            headers: req.headers,
            ip: req.ip,
            your_ip: req.headers['cf-connecting-ip']
        })
    } catch (err) {
        res.status(500).json({ msg: "Internal unknown server error." });
    }
};
