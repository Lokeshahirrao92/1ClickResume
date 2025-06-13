import React, { useState } from 'react'

function ResumeForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    education: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} required />
      <textarea name="education" placeholder="Education Details" onChange={handleChange} required />
      <button type="submit">Generate Resume</button>
    </form>
  )
}

export default ResumeForm
