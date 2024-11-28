import React, { useState } from 'react';

const PrivateTracker = () => {
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  return (
    <div>
      <h2>Private Word Tracker</h2>
      <button onClick={() => setTrackingEnabled(!trackingEnabled)}>
        {trackingEnabled ? 'Disable' : 'Enable'} Tracking
      </button>
    </div>
  );
};

export default PrivateTracker;
