import React from 'react';
import NotFoundImage from './../assets/images/not-found.svg';
const NotFoundPage = () => {
  return (
    <section className="  bg-indigo-200 h-[calc(100vh-80px)]  w-full flex items-center justify-center">
      <img src={NotFoundImage} className="w-[min(700px,100%)] h-auto" alt="Page not found" />
    </section>
  );
};

export default NotFoundPage;
