import React, { useEffect, useState } from 'react';

function InstallButton() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
let deferredPrompt;
  useEffect(() => {
    

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      deferredPrompt = event;
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <div>
      {showInstallPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
    </div>
  );
}

export default InstallButton;
