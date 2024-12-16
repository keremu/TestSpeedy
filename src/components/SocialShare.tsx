import React from 'react';
import { Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { MetricsType } from '../types';

interface SocialShareProps {
  metrics: MetricsType;
}

const SocialShare = ({ metrics }: SocialShareProps) => {
  const shareText = `Just tested my internet speed with TestSpeedy:
Download: ${metrics.downloadSpeed} Mbps
Upload: ${metrics.uploadSpeed} Mbps
Ping: ${metrics.ping} ms`;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('My Internet Speed Test Results')}&summary=${encodeURIComponent(shareText)}`
  };

  return (
    <div className="mt-6 text-center">
      <div className="flex justify-center items-center gap-4">
        <span className="text-gray-600 flex items-center">
          <Share2 className="w-4 h-4 mr-2" />
          Share Results:
        </span>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-400 hover:text-blue-600 transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-blue-700 hover:text-blue-900 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialShare;