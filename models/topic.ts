import mongoose, { Schema, Document } from "mongoose";

interface TopicAttributes {
  title: string;
  description: string;
}

interface TopicDocument extends Document, TopicAttributes {
  createdAt: Date;
  updatedAt: Date;
}

const topicSchema = new Schema<TopicDocument>(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model<TopicDocument>("Topic", topicSchema);

export default Topic;
