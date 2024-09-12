import React from 'react'

const Contact = () => {
    const inputStyle = {
        padding: '12px 20px',
        margin: '8px 0',
        border: '2px solid #ccc',
        borderRadius: '8px', // Smooth, curved edges
        boxSizing: 'border-box' // Ensures padding and border are included in the element's total width and height
    };
  return (
    <section class="contact" style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', backgroundColor:'skyblue'}}>
        <form action="https://formspree.io/f/mlekwejk" method="POST" style={{ display:'flex', flexDirection:'column', gap:'1.2rem', marginRight:'4rem' }}>
            <div style={{ display:'flex', gap:'1.2rem'}}>
                <input type="text" name="First Name" style={inputStyle} placeholder="First Name" required />
                <input type="text" name="Last Name" style={inputStyle} placeholder="Last Name" required />
            </div>
            <input type="email" name="Email Address" style={inputStyle} placeholder="Your Email Address" required />
            <textarea name="Message" rows="7" style={inputStyle} placeholder="Message" required></textarea>
            <button type="submit" class="btn btn-primary" style={{ cursor:'pointer' }}>Send Message</button>
        </form>
    </section>
  )
}

export default Contact;
