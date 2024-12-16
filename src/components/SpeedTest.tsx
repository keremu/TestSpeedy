import React, { useState } from 'react';
import SpeedMetrics from './SpeedMetrics';
import SpeedTestButton from './SpeedTestButton';
import NetworkInfo from './NetworkInfo';
import SocialShare from './SocialShare';
import { useSpeedTest } from '../hooks/useSpeedTest';
import ResultCard from './ResultCard';

const SpeedTest = () => {
  const { testing, metrics, startTest } = useSpeedTest();
  const [showResult, setShowResult] = useState(false);

  const handleTestComplete = () => {
    setShowResult(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">TestSpeedy</h1>
          <p className="text-gray-600">Check your internet speed in seconds</p>
        </div>

        <SpeedMetrics metrics={metrics} />
        <SpeedTestButton 
          testing={testing} 
          onStart={startTest} 
          onComplete={handleTestComplete} 
        />

        {testing && (
          <div className="mt-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ 
                  width: `${metrics.progress}%`
                }}
              />
            </div>
          </div>
        )}

        <NetworkInfo />

        {showResult && metrics.downloadSpeed && (
          <>
            <ResultCard metrics={metrics} />
            <SocialShare metrics={metrics} />
          </>
        )}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">For best results:</p>
        <ul className="text-sm">
          <li>Close other tabs and applications</li>
          <li>Avoid downloading or streaming during the test</li>
          <li>Connect directly to your router if possible</li>
        </ul>
      </div>
    </div>
  );
};

export default SpeedTest;