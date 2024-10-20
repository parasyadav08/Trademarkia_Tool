import React from 'react';
import './FullBlueprint.css';

const FullBlueprint = () => {
  return (
    <div className="full-blueprint">
      <h1>Full Blueprint of Product</h1>
      
      <section className="home-screen">
        <h2>Home Screen</h2>
        <ul>
          <li>Header with the Trademarkia logo and navigation links (Home, Features, Pricing, Contact)</li>
          <li>A call-to-action (CTA) button: “Start Your Branding Journey”</li>
          <li>Brief introduction to the tool with icons representing business name generation, logo design, and trademark registration.</li>
          <li>Footer with links to social media and additional resources.</li>
        </ul>
      </section>

      <section className="name-generation-screen">
        <h2>Business Name Generation Screen</h2>
        <ul>
          <li>Input fields for users to enter keywords, preferred style, and industry.</li>
          <li>A button to generate names: “Generate Names”</li>
          <li>Section showing generated business names with availability status (e.g., “Available”, “Taken”).</li>
          <li>A button next to each name: “Check Trademark” that redirects to the trademark availability checker.</li>
        </ul>
      </section>

      <section className="logo-design-screen">
        <h2>Logo Design Screen</h2>
        <ul>
          <li>Area to upload the generated business name.</li>
          <li>Options for users to choose logo styles (e.g., modern, classic, playful).</li>
          <li>Button to generate logos: “Create Logo”</li>
          <li>Gallery of generated logos with customization options (e.g., colors, fonts).</li>
        </ul>
      </section>

      <section className="business-plan-generator-screen">
        <h2>Business Plan Generator Screen</h2>
        <ul>
          <li>Simple questionnaire interface to fill in business details (e.g., mission, market analysis).</li>
          <li>Progress bar showing completion percentage.</li>
          <li>A “Generate Plan” button to create a basic business plan.</li>
        </ul>
      </section>

      <section className="trademark-filing-assistance-screen">
        <h2>Trademark Filing Assistance Screen</h2>
        <ul>
          <li>Input field for the selected business name.</li>
          <li>A button to check trademark availability: “Check Trademark”</li>
          <li>Information about the trademark filing process, including necessary documents.</li>
          <li>A CTA: “Start Trademark Registration” that guides the user through filing steps.</li>
        </ul>
      </section>
    </div>
  );
};

export default FullBlueprint;
