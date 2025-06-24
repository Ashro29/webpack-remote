// import.jsx

import React, { lazy, Suspense, useEffect } from "react";

// Lazy load the federated component from remote_app
const ConvertToOrder = lazy(() =>
  import("RemoteApp/ConvertToOrder")
    .then((mod) => {
      console.log("Remote module loaded:", mod);
      return mod;
    })
    .catch((err) => {
      console.error("Remote module failed to load:", err);
      return { default: () => <div>Failed to load remote component</div> };
    })
);

/**
 * @typedef {Object} RedirectMessage
 * @property {"redirect"} channel
 * @property {{ orderid: string, orderReferenceNumber: string, redirectUrl: string }} data
 */

/**
 * @typedef {Object} Props
 * @property {string} iframeURL
 */

export const ConverToNetemb = ({ iframeURL }) => {
  useEffect(() => {
    console.log("RemoteComponentWrapper mounted");
  }, []);

  const handleSave = (response) => {
    console.log("Received redirect response from remote:", response);
    window.location.href = response.data.redirectUrl;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConvertToOrder iframeURL={iframeURL} onSaveCallback={handleSave} />
    </Suspense>
  );
};
