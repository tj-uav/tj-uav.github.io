"use client"

import { useState } from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"
import Grid from "components/Grid"
import Button from "components/Button"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import ContactInfo from "./components/ContactInfo"
import { Mail, User, MessageSquare, Send, CheckCircle } from "./components/Icons"

const Container = styled(Grid)`
  background-color: ${darker};
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  overflow: hidden;

  ${mobile} {
    column-gap: 0;
    height: auto;
    --rows: repeat(14, auto);
    --columns: 1.5rem repeat(6, 1fr) 1.5rem;

    /* prettier-ignore */
    grid-template-areas:
      ".       .       .       .       .       .       .       .       "
      ".       heading heading heading heading heading heading .       "
      ".       subhead subhead subhead subhead subhead subhead .       "
      ".       name    name    name    name    name    name    .       "
      ".       box1    box1    box1    box1    box1    box1    .       "
      ".       email   email   email   email   email   email   .       "
      ".       box2    box2    box2    box2    box2    box2    .       "
      ".       message message message message message message .       "
      ".       box4    box4    box4    box4    box4    box4    .       "
      ".       box4    box4    box4    box4    box4    box4    .       "
      ".       box4    box4    box4    box4    box4    box4    .       "
      ".       button  button  button  button  button  button  .       "
      ".       status  status  status  status  status  status  .       "
      ".       .       .       .       .       .       .       .       ";
  }

  ${tablet} {
    --columns: 1.5rem repeat(6, 1fr) 1.5rem;
    --rows: repeat(14, auto);
    gap: 1rem;
  }

  ${desktop} {
    --columns: 1.5rem repeat(3, 1fr) 0.5fr repeat(3, 1fr) 1.5rem;
    --rows: repeat(12, auto);

    /* prettier-ignore */
    grid-template-areas:
      ".       .       .       .       .       .       .       .       .       "
      ".       heading heading heading heading heading heading heading .       "
      ".       subhead subhead subhead subhead subhead subhead subhead .       "
      ".       name    name    name    .       info    info    info    .       "
      ".       box1    box1    box1    .       info    info    info    .       "
      ".       email   email   email   .       info    info    info    .       "
      ".       box2    box2    box2    .       info    info    info    .       "
      ".       message message message .       info    info    info    .       "
      ".       box4    box4    box4    .       info    info    info    .       "
      ".       box4    box4    box4    .       info    info    info    .       "
      ".       button  button  status  .       info    info    info    .       "
      ".       .       .       .       .       .       .       .       .       ";
  }
`

const FormSection = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const ThemedLabel = styled.label(() => Paragraph)
const Label = styled(ThemedLabel)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #f0f0f0;
`

const ThemedInput = styled.input(() => Paragraph)
const Input = styled(ThemedInput)`
  background-color: ${dark};
  border-radius: 4px;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }
  
  &.error {
    border-color: #ff5757;
  }
`

const ThemedTextarea = styled(TextareaAutosize)(() => Paragraph)
const Textarea = styled(ThemedTextarea)`
  background-color: ${dark};
  border-radius: 4px;
  min-height: ${16 * 6}pt;
  padding: 0.75rem 1rem;
  resize: vertical;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.05);
  }
  
  &.error {
    border-color: #ff5757;
  }
`

const ErrorMessage = styled.div`
  color: #ff5757;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  width: auto;
  transition: transform 0.2s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4caf50;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? 0 : "10px")});
  transition: all 0.3s ease;
`

const Title = styled.h1`
  ${Heading};
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  ${Paragraph};
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
`

const Contact = ({ content = {}, ...props }) => {
  console.log("Contact component rendering", { content, props })

  // Add default content if none is provided
  const defaultContent = {
    title: "Get in Touch",
    subtitle: "Have a question or want to work together? Drop us a message!",
  }

  const contentToUse = content || defaultContent

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setIsSubmitted(false)
        }, 3000)
      }, 1500)
    }
  }

  return (
    <Container as="form" onSubmit={handleSubmit} {...props}>
      <Title style={{ gridArea: "heading" }}>{contentToUse.title || "Get in Touch"}</Title>
      <Subtitle style={{ gridArea: "subhead" }}>
        {contentToUse.subtitle || "Have a question or want to work together? Drop us a message!"}
      </Subtitle>

      <Label style={{ gridArea: "name" }}>
        <User size={16} />
        Name
      </Label>
      <div style={{ gridArea: "box1" }}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
          aria-label="Name"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </div>

      <Label style={{ gridArea: "email" }}>
        <Mail size={16} />
        Email
      </Label>
      <div style={{ gridArea: "box2" }}>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
          aria-label="Email"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </div>

      <Label style={{ gridArea: "message" }}>
        <MessageSquare size={16} />
        Message
      </Label>
      <div style={{ gridArea: "box4" }}>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
          aria-label="Message"
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
      </div>

      <div style={{ gridArea: "button" }}>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={16} />
        </SubmitButton>
      </div>

      <StatusMessage style={{ gridArea: "status" }} visible={isSubmitted}>
        <CheckCircle size={16} />
        Message sent successfully!
      </StatusMessage>

      <div style={{ gridArea: "info" }}>
        <ContactInfo />
      </div>
    </Container>
  )
}

export default Contact

