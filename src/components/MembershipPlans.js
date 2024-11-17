// components/MembershipPlans.js
import React from 'react';
import './MembershipPlans.css';

function MembershipPlans() {
  const plans = [
    { name: "Basic", price: "$10/month", benefits: ["5 books per month"] },
    { name: "Premium", price: "$20/month", benefits: ["10 books per month", "Access to e-library"] },
    { name: "Family", price: "$30/month", benefits: ["Unlimited books", "Family membership benefits"] },
  ];

  return (
    <section className="membership-plans">
      <h2>Our Membership Plans</h2>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Join {plan.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipPlans;
