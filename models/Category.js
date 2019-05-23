import { Schema } from 'mongoose';
import db from '../utils/db';

const categorySchema = new Schema({
    index: { type: Number },
    title: { type: String },
    code: { type: String },
    description: { type: String },
    isRoot: { type: Boolean },
    image: { type: String },
    parent: {
        ref: 'Category',
        type: Schema.Types.ObjectId
    }
});

let model = db.model('Category', categorySchema);
export default model
