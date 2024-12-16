import React from 'react';
import { MetricsType } from '../types';

interface ResultCardProps {
  metrics: MetricsType;
}

const ResultCard = ({ metrics }: ResultCardProps) => {
  return (
    <div className="mt-8 relative">
      <div className="absolute -top-4 right-4">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&q=80"
          alt="Speed Test Result"
          className="w-24 h-24 rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Your Speed Test Results</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm opacity-80">Download</p>
            <p className="text-2xl font-bold">{metrics.downloadSpeed} Mbps</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Upload</p>
            <p className="text-2xl font-bold">{metrics.uploadSpeed} Mbps</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Ping</p>
            <p className="text-2xl font-bold">{metrics.ping} ms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;