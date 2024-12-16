import { useState, useCallback } from 'react';
import { MetricsType } from '../types';

export const useSpeedTest = () => {
  const [testing, setTesting] = useState(false);
  const [metrics, setMetrics] = useState<MetricsType>({
    downloadSpeed: null,
    uploadSpeed: null,
    ping: null,
    progress: 0
  });

  const startTest = useCallback(() => {
    setTesting(true);
    setMetrics({
      downloadSpeed: null,
      uploadSpeed: null,
      ping: null,
      progress: 0
    });

    // Simulate ping test
    setTimeout(() => {
      setMetrics(prev => ({
        ...prev,
        ping: Math.floor(Math.random() * 30) + 5,
        progress: 20
      }));
      
      // Simulate download test
      let progress = 20;
      const downloadInterval = setInterval(() => {
        progress += 10;
        setMetrics(prev => ({
          ...prev,
          downloadSpeed: Math.floor(Math.random() * 100) + 50,
          progress
        }));
        
        if (progress >= 60) {
          clearInterval(downloadInterval);
          
          // Start upload test
          let uploadProgress = 60;
          const uploadInterval = setInterval(() => {
            uploadProgress += 10;
            setMetrics(prev => ({
              ...prev,
              uploadSpeed: Math.floor(Math.random() * 50) + 20,
              progress: uploadProgress
            }));
            
            if (uploadProgress >= 100) {
              clearInterval(uploadInterval);
              setTesting(false);
            }
          }, 300);
        }
      }, 300);
    }, 1000);
  }, []);

  return {
    testing,
    metrics,
    startTest
  };
};