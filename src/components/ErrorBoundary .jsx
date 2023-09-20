import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    // You can log the error or perform other actions here
    console.error(error, errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <div>Something went wrong.</div>; // Render an error message
  }

  return children; // Render the children if there's no error
}

export default ErrorBoundary;
