import { Document , Schema , model, models } from "mongoose"

export interface IProject extends Document {
    _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  imageUrl: string;
  url?: string;
  category: { _id: string, name: string }
  creator: { _id: string, firstName: string, lastName: string }
  
}

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    Creator: { type: Schema.Types.ObjectId, ref: 'User' },
  })
  
  const Project = models.Project || model('Project', ProjectSchema);
  
  export default Project;