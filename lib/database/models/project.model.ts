import { Document , Schema , model, models } from "mongoose"

export interface IProject extends Document {
    _id: string;
  title: string;
  description?: string;
  createdAt: Date;
  imageUrl: string;
  url?: string;
  category: { _id: string, name: string }
}

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
  })
  
  const Project = models.Project || model('Project', ProjectSchema);
  
  export default Project;