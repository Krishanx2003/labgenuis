"use client"
import Layout from './layout';
import React from 'react';

const About = () => {
  return (
 <Layout>
     <header className="bg-[#f4f4f4] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">About Lightning</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="rounded-lg h-96">
            <img alt="Office" className="object-cover h-full w-full rounded-lg" height="384" src="/post.png" />
          </div>
          <div className="mt-6 text-gray-600">
            <p className="mb-4">
              Lightning AI is the company behind PyTorch Lightning, the deep learning framework for training, finetuning
              and serving AI models (80+ million downloads).
            </p>
            <p className="mb-4">
              PyTorch Lightning started in 2015 by Lightning founder William Falcon while working on computational
              neuroscience research at Columbia University scaling Generative Adversarial Networks and Autoencoders in
              the context of neural decoding working under Liam Paninski. He open sourced it in 2019 while pursuing a
              PhD in self-supervised learning (SSL) at NYU and Facebook AI Research (FAIR) supervised by Kyunghyun Cho
              and Yann Lecun. SSL techniques are at the heart of models like Chat GPT (next word prediction).
            </p>
            <p className="mb-4">
              In 2019 PyTorch Lightning started to be used to train huge models on 1024+ GPUs inside Facebook AI. Today,
              it’s used by over 10,000 companies and 1+ million developers to train, finetune and deploy the world’s
              largest models.
            </p>
            <p className="mb-4">
              Lightning AI started in 2020 as a platform to train models on the cloud across 1000s of GPUs. Today, the
              platform has evolved to a fully end-to-end platform covering everything from distributed data processing,
              training, finetuning foundation models, to serving and deploying AI apps.
            </p>
            <p className="mb-4">
              Lightning Studios expand on PyTorch Lightning’s core ethos of “You do the science, we do the engineering”
              by delivering the world’s most intuitive, easy to use, fastest platform for working on AI. From
              prototyping research ideas to deploying foundation models.
            </p>
          </div>
        </div>
      </main>
   
 
    </Layout>
  );
};

export default About;
