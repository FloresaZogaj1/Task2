import React, { useState } from 'react';
import Tab from './components/Tab';
import Card from './components/Card';
const App = () => {
  const [activeTab, setActiveTab] = useState('Domains');
  const tabs = [
    'Domains',
    'Web Hosting',
    'Dedicated Servers',
    'Virtual Cloud Servers',
    'WordPress Hosting',
    'Email Hosting',
    'VPS Hosting Servers',
    'Free Hosting',
  ];
  const cardsData = {
    Domains: [
      { title: '.COM', price: '$5.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.AI', price: '$55.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.NET', price: '$7.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.HEALTH', price: '$7.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.CO.UK', price: '$3.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.ORG', price: '$15.99/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.CO', price: '$26.33/yr', discountPrice: 'Instead of $10.99/yr' },
      { title: '.SEA', price: '$26.33/yr', discountPrice: 'Instead of $10.99/yr' },
    ],
    'Web Hosting': [
      { title: 'Basic Plan', price: '$2.99/mo', discountPrice: 'Instead of $5.99/mo' },
      { title: 'Premium Plan', price: '$5.99/mo', discountPrice: 'Instead of $10.99/mo' },
      { title: 'Business Plan', price: '$9.99/mo', discountPrice: 'Instead of $15.99/mo' },
    ],
    'Dedicated Servers': [
      { title: 'Starter Server', price: '$99.99/mo', discountPrice: 'Instead of $149.99/mo' },
      { title: 'Advanced Server', price: '$199.99/mo', discountPrice: 'Instead of $249.99/mo' },
    ],
    'Virtual Cloud Servers': [
      { title: 'Cloud 1', price: '$19.99/mo', discountPrice: 'Instead of $29.99/mo' },
      { title: 'Cloud 2', price: '$29.99/mo', discountPrice: 'Instead of $39.99/mo' },
    ],
    'WordPress Hosting': [
      { title: 'WordPress Basic', price: '$3.99/mo', discountPrice: 'Instead of $6.99/mo' },
      { title: 'WordPress Pro', price: '$7.99/mo', discountPrice: 'Instead of $12.99/mo' },
    ],
    'Email Hosting': [
      { title: 'Email Basic', price: '$1.99/mo', discountPrice: 'Instead of $3.99/mo' },
      { title: 'Email Pro', price: '$3.99/mo', discountPrice: 'Instead of $7.99/mo' },
    ],
    'VPS Hosting Servers': [
      { title: 'VPS 1', price: '$9.99/mo', discountPrice: 'Instead of $14.99/mo' },
      { title: 'VPS 2', price: '$19.99/mo', discountPrice: 'Instead of $29.99/mo' },
    ],
    'Free Hosting': [
      { title: 'Free Plan', price: '$0.00/mo', discountPrice: 'No Discount' },
    ],
  };
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center space-x-2 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            isActive={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData[activeTab].length > 0 ? (
          cardsData[activeTab].map((card, index) => (
            <Card key={index} title={card.title} price={card.price} discountPrice={card.discountPrice} />
          ))
        ) : (
          <p className="text-center col-span-4">No data available for {activeTab}</p>
        )}
      </div>
    </div>
  );
};
export default App;