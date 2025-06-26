import React from 'react'

const Pricing = () => {
  return (
    <>
       <section className="pricing-container">
    <h2>Pricing</h2>
    <div className="pricing-grid">
      <div className="plan">
        <h3>Free</h3>
        <p className="price">$0 / month</p>
        <ul>
          <li>AI chat assistance</li>
          <li>Access to beginner modules</li>
          <li>Progress tracking</li>
        </ul>
        <a href="/signup" className="choose-button">Choose Free</a>
      </div>
      <div className="plan featured">
        <h3>Pro</h3>
        <p className="price">$19 / month</p>
        <ul>
          <li>All Free features</li>
          <li>Unlimited modules + advanced content</li>
          <li>AI-generated quizzes & custom design docs</li>
          <li>Priority support</li>
        </ul>
        <a href="/signup" className="choose-button">Get Pro</a>
      </div>
      <div className="plan">
        <h3>Enterprise</h3>
        <p className="price">Contact us</p>
        <ul>
          <li>Team accounts</li>
          <li>Custom onboarding</li>
          <li>Dedicated support</li>
          <li>On‑premise or VPC deployment</li>
        </ul>
        <a href="/contact" className="choose-button">Contact Sales</a>
      </div>
    </div>
  </section>
    </>
  )
}

export default Pricing