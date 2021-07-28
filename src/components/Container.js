import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';

export default function Container() {
    const [currentTab, setCurrentTab] = useState('About');

    const renderTab = () => {
        if (currentTab === 'About') {
            return <About />;
        }
        if (currentTab === 'Contact') {
            return <Contact />
        }
        if (currentTab === 'Resume') {
            return <Resume />
        }
        if (currentTab === 'Portfolio') {
            return <Portfolio />
        }
    };

    const handleTabChange = (tab) => setCurrentTab(tab);

    return (
        <div>
            <Navigation currentTab={currentTab} handleTabChange={handleTabChange} />
            {renderTab()}
        </div>
    );
}
