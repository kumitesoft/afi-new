import dbConnect from '../../../utils/dbConnection';
import Item from '../../../models/itemModel';

dbConnect();

export default async (req, res) => {
    const {
        query: { currentPage },
        method 
    } = req;
    
    switch (method) {
        case 'GET':
            try {
                let items = await Item.find();
                let n = items.slice(0, currentPage)

                res.status(200).json({ success: true, data: n })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}