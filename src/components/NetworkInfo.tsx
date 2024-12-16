import React, { useState, useEffect } from 'react';
import { Globe, Wifi, MapPin, Router } from 'lucide-react';

const NetworkInfo = () => {
  const [networkInfo, setNetworkInfo] = useState({
    ip: '',
    isp: '',
    location: '',
    connection: ''
  });

  useEffect(() => {
    const fetchNetworkInfo = async () => {
      try {
        // In production, use a real IP geolocation API
        setNetworkInfo({
          ip: '192.168.1.1',
          isp: 'Example ISP',
          location: 'New York, US',
          connection: 'Fiber'
        });
      } catch (error) {
        console.error('Failed to fetch network info:', error);
      }
    };

    fetchNetworkInfo();
  }, []);

  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Network Information</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <Globe className="w-5 h-5 mr-2 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">IP Address</p>
            <p className="font-medium">{networkInfo.ip || '---'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wifi className="w-5 h-5 mr-2 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">ISP</p>
            <p className="font-medium">{networkInfo.isp || '---'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-medium">{networkInfo.location || '---'}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Router className="w-5 h-5 mr-2 text-gray-600" />
          <div>
            <p className="text-sm text-gray-600">Connection</p>
            <p className="font-medium">{networkInfo.connection || '---'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkInfo;