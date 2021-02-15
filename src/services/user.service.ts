import { Model } from 'mongoose';
import { Inject, Service } from 'typedi';
import { User } from '../models/user.model';

@Service()
export class UserService {
  constructor(
    @Inject('userModel')
    private userModel: Model<User>,
  ) {}

  createUser(user: User): Promise<User> {
    return new this.userModel(user).save();
  }

  findAll(): Promise<Array<User>> {
    return this.userModel.find({}).exec();
  }
}
