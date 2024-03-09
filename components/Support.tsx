import React from "react";

// Support component
export function Support() {
  return (
    <div className=" min-h-screen p-10">
       <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">How we support our partners all over the world</h1>
      <p className="text-xl mb-10">
        SaaS has become a common delivery model for many business applications, including office software, messaging
        software, payroll processing software, DBMS software, management software
      </p>
      {/* Partner ratings */}
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          {/* Star ratings */}
          <div className="flex items-center mb-2">
            {/* StarIcon component */}
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarIcon className="text-yellow-400 w-5 h-5" />
            <StarHalfIcon className="text-yellow-400 w-5 h-5" />
          </div>
          <p className="text-lg">4.9 / 5 rating</p>
          <p className="text-lg font-bold mt-2">Databricks</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <StarIcon className="text-blue-400 w-5 h-5" />
            <StarIcon className="text-blue-400 w-5 h-5" />
            <StarIcon className="text-blue-400 w-5 h-5" />
            <StarIcon className="text-blue-400 w-5 h-5" />
            <StarIcon className="text-blue-400 w-5 h-5" />
          </div>
          <p className="text-lg">4.8 / 5 rating</p>
          <p className="text-lg font-bold mt-2">Chainalysis</p>
        </div>
      </div>
      </div>
      {/* Features grid */}
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex flex-col items-center">
          {/* ArrowUpCircleIcon component */}
          <ArrowUpCircleIcon className="text-green-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Publishing</h3>
          <p className="text-center">
            Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* PieChartIcon component */}
          <PieChartIcon className="text-teal-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Analytics</h3>
          <p className="text-center">Analyze your performance and create gorgeous reports</p>
        </div>
        <div className="flex flex-col items-center">
          {/* HeartHandshakeIcon component */}
          <HeartHandshakeIcon className="text-purple-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold mb-2">Engagement</h3>
          <p className="text-center">Quickly navigate and engage with your audience</p>
        </div>
      </div>
    </div>
  );
}

// StarIcon component
function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// StarHalfIcon component
function StarHalfIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  );
}

// ArrowUpCircleIcon component
function ArrowUpCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </svg>
  );
}

// PieChartIcon component
function PieChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

// HeartHandshakeIcon component
function HeartHandshakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  );
}
