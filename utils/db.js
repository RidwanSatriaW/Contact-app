const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/wpu', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// // Menambah satu data
// const contact1 = new Contact({
//     nama: 'Lala',
//     nohp: '081234345678',
//     email: 'lala@example.com',
// });

// contact1.save().then((contact) => console.log(contact))
