import React from 'react';
// 
const ErrorBanner = ({ message }) => {
  return (
    <div className=" alert alert-danger text-center" role="alert" >
      {message}
    </div>
  );
};

export default ErrorBanner;
