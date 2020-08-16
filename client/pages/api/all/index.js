import dbConnect from '../../../utils/dbConnection';
import Item from '../../../models/itemModel';
// https://github.com/rivera1294/next-mongodb
dbConnect();

export default async (req, res) => {
  const { method } = req;
  const {
    name,
    description,
    price,
    category,
    subCategory,
    fileName,
  } = req.body;
  
  switch (method) {
    // GET 5 ITEMS
    case 'GET':
      try {
        const items = await Item.find();
        let onlyFive = items.slice(0, 5);

        res.status(200).json({ success: true, data: onlyFive });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    // ADMIN - ADD NEW ITEM
    case 'POST':
      try {
        let item = await new Item({
          name: name,
          description: description,
          price: price,
          category: category,
          subCategory: subCategory,
          image: `./${category}/${subCategory}/${fileName}.png`,
        });
        item.save();

        res.status(201).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
