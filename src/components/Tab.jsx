import React from 'react';
import { Tab } from 'react-tabs';

const TabComponent = ({ label }) => (
  <Tab
    className="p-2 text-gray-500 cursor-pointer transition duration-300 ease-in-out"
    selectedClassName="text-blue-500 border-b-2 border-blue-500"
  >
    {label}
  </Tab>
);

TabComponent.tabsRole = 'Tab';

export default TabComponent;
