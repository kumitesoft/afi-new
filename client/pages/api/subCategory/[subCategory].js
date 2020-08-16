import dbConnect from '../../../utils/dbConnection';
import Item from '../../../models/itemModel';

dbConnect();

export default async (req, res) => {
    const {
        query: { subCategory },
        method 
    } = req;

    console.log(subCategory, ' tu O?!??')

    switch (method) {
        case 'GET':
            try {
                let items = await Item.find({ subCategory: subCategory });

                res.status(200).json({ success: true, data: items })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}