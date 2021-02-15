import Container from 'typedi'
import userModel from '../models/user.model'

export default () => {  
  Container.set('userModel', userModel);
}