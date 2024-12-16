import React from 'react';
import { Play, Loader } from 'lucide-react';

interface SpeedTestButtonProps {
  testing: boolean;
  onStart: () => void;
  onComplete: () => void;
}

const SpeedTestButton = ({ testing, onStart, onComplete }: SpeedTestButtonProps) => {
  const handleClick = () => {
    if (!testing) {
      onStart();
      // Simulate test completion after the progress reaches 100%
      setTimeout(onComplete, 4000);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={testing}
      className={`
        w-full py-4 px-8 rounded-xl text-white font-semibold
        flex items-center justify-center gap-2
        transition-all duration-300
        ${testing 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-95'
        }
      `}
    >
      {testing ? (
        <>
          <Loader className="w-5 h-5 animate-spin" />
          Testing Speed...
        </>
      ) : (
        <>
          <Play className="w-5 h-5" />
          Start Speed Test
        </>
      )}
    </button>
  );
};

export default SpeedTestButton;