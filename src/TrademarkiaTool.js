import React from 'react';
import './TrademarkiaTool.css'; // Importing the CSS file

const TrademarkiaTool = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Trademarkia Business Tool</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#name-generator">Name Generator</a></li>
                        <li><a href="#logo-generator">Logo Generator</a></li>
                        <li><a href="#business-plan">Business Plan</a></li>
                        <li><a href="#trademark-order">Trademark Order</a></li>
                        <li><a href="#full-blueprint">Full Blueprint Of Product</a></li> {/* New link for Full Blueprint */}
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <section id="name-generator" className="tool-section">
                    <h2>Business Name Generator</h2>
                    <p>Generate unique names for your business.</p>
                    <button className="generate-button">Generate Name</button>
                </section>
                <section id="logo-generator" className="tool-section">
                    <h2>Logo Generator</h2>
                    <p>Create a stunning logo for your business.</p>
                    <button className="generate-button">Create Logo</button>
                </section>
                <section id="business-plan" className="tool-section">
                    <h2>Business Plan Assistant</h2>
                    <p>Get help in writing your business plan.</p>
                    <button className="generate-button">Get Started</button>
                </section>
                <section id="trademark-order" className="tool-section">
                    <h2>Trademark Order</h2>
                    <p>Place a trademark order easily.</p>
                    <button className="generate-button">Order Trademark</button>
                </section>
                <section id="full-blueprint" className="tool-section"> {/* New Full Blueprint section */}
                    <h2>Full Blueprint of Product</h2>
                    <h3>Suggested Wireframe Screens</h3>
                    <ul>
                        <li><strong>Home Screen:</strong> Header with the Trademarkia logo and navigation links (Home, Features, Pricing, Contact). A CTA button: “Start Your Branding Journey”. Brief introduction to the tool with icons representing business name generation, logo design, and trademark registration. Footer with links to social media and additional resources.</li>
                        <li><strong>Business Name Generation Screen:</strong> Input fields for users to enter keywords, preferred style, and industry. A button to generate names: “Generate Names”. Section showing generated business names with availability status (e.g., “Available”, “Taken”). A button next to each name: “Check Trademark” that redirects to the trademark availability checker.</li>
                        <li><strong>Logo Design Screen:</strong> Area to upload the generated business name. Options for users to choose logo styles (e.g., modern, classic, playful). Button to generate logos: “Create Logo”. Gallery of generated logos with customization options (e.g., colors, fonts).</li>
                        <li><strong>Business Plan Generator Screen:</strong> Simple questionnaire interface to fill in business details (e.g., mission, market analysis). Progress bar showing completion percentage. A “Generate Plan” button to create a basic business plan.</li>
                        <li><strong>Trademark Filing Assistance Screen:</strong> Input field for the selected business name. A button to check trademark availability: “Check Trademark”. Information about the trademark filing process, including necessary documents. A CTA: “Start Trademark Registration” that guides the user through filing steps.</li>
                    </ul>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Trademarkia. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default TrademarkiaTool; // Ensure this line is present
