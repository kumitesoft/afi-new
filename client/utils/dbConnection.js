import mongoose from 'mongoose';
const LRUCache = require('lru-cache');

// export const ssrCache = new LRUCache({
//   max: 100,
//   maxAge: 1000 * 60, // 1hour
// });

// export async function checkIfCached(req, res, pagePath, queryParams) {
//   if (ssrCache.has(pagePath)) {
//     let result = ssrCache.get(pagePath);
//     return result;
//   } else {
//     return false;
//   }
// }

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect('mongodb+srv://marcin100:marcinmarcin100@afi-app.rcqkw.mongodb.net/Afi-app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    connection.isConnected = db.connections[0].readyState;

//   const connection = mongoose.connection;
//   connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
//   });
}

export default dbConnect;
