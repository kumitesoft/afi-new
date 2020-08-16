import dbConnect from '../../../utils/dbConnection';
import Item from '../../../models/itemModel';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'PUT':
            try {
                let item = await Item.find({ _id: id  }); 

                let popularity = item[0].popularity;
                popularity++
            
                let itemUpdated = await Item.findByIdAndUpdate({_id : id}, { popularity: popularity })

                res.status(200).json({ success: true, data: itemUpdated });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}