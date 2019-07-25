let items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];

const sendResponse = function (res, status, data) {
    res.status(status);
    res.json(data);
};

module.exports = {
    getItems: function(req, res) {
        let data;
        console.log('/items called');
        try {
            console.log(req.query);
            let id = +req.query.id;
            if (id)
                data = [...items].filter(item => item.id == id);
            else
                data = [...items];

            sendResponse(res, 200, data);
        }
        catch (e) {
            sendResponse(res, 400, e);
        }

    }
};