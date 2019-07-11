module.exports = {
    getProducts: async (req, res) => {
        res.status(200).json({
            'success': true,
            'message': 'products retrieved successfully',
            'products': [
                {
                    'id': '8hjchjk65sdsd89eehw7e987qq08r7',
                    'name': 'Tube Holder',
                    'price': 5000,
                    'quantity': 200,
                    'createdAp': '2019-11-07',
                    'updatedAt': '2019-11-07',
                },
                {
                    'id': '8hjchjk65sdsd89eehw7e987qq08r7',
                    'name': 'Tube Holder',
                    'price': 5000,
                    'quantity': 200,
                    'createdAp': '2019-11-07',
                    'updatedAt': '2019-11-07',
                },
                {
                    'id': '8hjchjk65sdsd89eehw7e987qq08r7',
                    'name': 'Tube Holder',
                    'price': 5000,
                    'quantity': 200,
                    'createdAp': '2019-11-07',
                    'updatedAt': '2019-11-07',
                },
                {
                    'id': '8hjchjk65sdsd89eehw7e987qq08r7',
                    'name': 'Tube Holder',
                    'price': 5000,
                    'quantity': 200,
                    'createdAp': '2019-11-07',
                    'updatedAt': '2019-11-07',
                }
            ]
        });
    },
};
