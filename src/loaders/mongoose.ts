import * as mongoose from 'mongoose'

export default async (): Promise<mongoose.Connection> => {
  mongoose.connection.on('connected', () => {
    console.log('connected to DB');
  });

  const connection = await mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  return connection.connection;
}