import React from 'react';
import { Download, Upload, Gauge } from 'lucide-react';
import { MetricsType } from '../types';

interface SpeedMetricsProps {
  metrics: MetricsType;
}

const SpeedMetrics = ({ metrics }: SpeedMetricsProps) => {
  const { downloadSpeed, uploadSpeed, ping } = metrics;

  return (
    <div className="grid grid-cols-3 gap-8 mb-8">
      <div className="text-center p-6 bg-gray-50 rounded-xl">
        <Download className="w-8 h-8 mx-auto mb-2 text-blue-500" />
        <p className="text-gray-600 mb-2">Download</p>
        <p className="text-2xl font-bold text-gray-800">
          {downloadSpeed ? `${downloadSpeed} Mbps` : '--'}
        </p>
      </div>

      <div className="text-center p-6 bg-gray-50 rounded-xl">
        <Upload className="w-8 h-8 mx-auto mb-2 text-green-500" />
        <p className="text-gray-600 mb-2">Upload</p>
        <p className="text-2xl font-bold text-gray-800">
          {uploadSpeed ? `${uploadSpeed} Mbps` : '--'}
        </p>
      </div>

      <div className="text-center p-6 bg-gray-50 rounded-xl">
        <Gauge className="w-8 h-8 mx-auto mb-2 text-purple-500" />
        <p className="text-gray-600 mb-2">Ping</p>
        <p className="text-2xl font-bold text-gray-800">
          {ping ? `${ping} ms` : '--'}
        </p>
      </div>
    </div>
  );
};

export default SpeedMetrics;