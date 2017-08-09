import React from 'react'

import Divider from './Divider'

import '../styles/form.css'

function Form() {
  return (
    <div
      id='lead-form'
      className='form--container'
      style={{
        background: 'rgba(0,0,0,0.75)',
        borderRadius: 5,
        padding: '1.4rem 1rem',
      }}
    >
      <div
        className="form__header"
        style={{
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
            lineHeight: 1.4,
          }}
        >
          FREE CASE EVALUATION
        </div>
        <div>GET STARTED</div>
      </div>
      <Divider
        divHeight="1px"
        divColor="#C0392B"
        divWidth="25%"
        divTop="0.5rem"
        divBottom="0.5rem"
      />
      <form       action="https://formspree.io/creditjudge@dealman.net"
      method="POST"
      className="form form--contact"
      >
        <fieldset>
          <input type="text" name='Name' placeholder="Your Name" />
          <input type="email" name='_replyto' placeholder="Your Email" />
          <input type="phone" name="Phone" placeholder="Phone Number" />
        </fieldset>
        <label>
          Employment Status
          <select
            name="Employment Status"
            id="employment"
            defaultValue="employed"
          >
            <option value="employed">Employed</option>
            <option value="self-employed">Self Employed</option>
            <option value="military">Military</option>
            <option value="retired">Retired</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Describe Your Case
          <textarea
            name="Description"
            id="form-description"
            cols="30"
            rows="4"
            placeholder="The Credit Judge will contact you immediately"
          />
        </label>
        <input
          type="submit"
          value="GET APPROVED"
          style={{
            background: '#C0392B',
            color: '#ffffff',
            border: 'none',
            fontWeight: 800,
            padding: '0.6rem 0',
            textAlign: 'center',
          }}
        />
      </form>
      <Divider
        divHeight="1px"
        divColor="#444444"
        divWidth="100%"
        divTop="1rem"
        divBottom="1rem"
      />
      <p
        style={{
          fontSize: '0.7rem',
          lineHeight: 1.15,
        }}
      >
        By submitting your contact information, you consent to be contacted via
        email or phone about purchasing a vehicle or obtaining vehicle
        financing.
      </p>
    </div>
  )
}

export default Form
