import React from 'react'

const Home = () => {
  return (
    <>
       <section className="hero-section">
      <h1>AI-Powered Assistant for Game Designers</h1>
      <p>
        Supercharge your creative workflow with our AI tutor. Generate design
        documents, polish narrative flows, and prototype faster—right from your
        browser.
      </p>
      <a href="/signup" className="cta-button">Get Started</a>
    </section>

    <section className="features-section">
      <h2>What You Can Do</h2>
      <ul>
        <li>
          <strong>Create Design Documents:</strong> Use AI to draft game design documents, narrative outlines, diagrams, and more.
        </li>
        <li>
          <strong>Enhance Workflow:</strong> Organize content, refine gameplay logic, and streamline your process.
        </li>
        <li>
          <strong>Interactive Learning:</strong> Learn new concepts—like Unity scripting, narrative design, or level flow—through example-driven chat.
        </li>
      </ul>
    </section>

    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <ol>
        <li>Register and track your projects.</li>
        <li>Select or upload your design module.</li>
        <li>Chat with the AI: ask questions or request examples.</li>
        <li>Iterate, refine, and export polished documents.</li>
      </ol>
    </section>
    </>
  )
}

export default Home