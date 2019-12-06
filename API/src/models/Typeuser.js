import {Schema,model} from 'mongoose';

const typeuserSchema = new Schema({
  role: {
    type: Boolean,
    required: true
  }
});

const Typeuser = model('Typeuser', typeuserSchema);
export default Typeuser;