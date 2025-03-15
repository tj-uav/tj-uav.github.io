"use client"

import { useState } from "react"
import styled from "styled-components"
import { darker } from "theme/Colors"
import { Heading } from "theme/Styles"
import Button from "components/Button"

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const FormTitle = styled.h2`
  ${Heading}
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
`

const FormField = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${darker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: ${darker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #e74c3c;
  }
`

const FileInput = styled.input`
  display: none;
`

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #34495e;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #2c3e50;
  }
`

const ImagePreview = styled.img`
  max-width: 300px;
  max-height: 200px;
  margin-top: 1rem;
  border-radius: 4px;
  display: block;
`

const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
  width: auto;
  padding: 0.75rem 2rem;
`

const BlogsForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(file)
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content fields")
      return
    }

    onSubmit({
      title,
      content,
      image: imagePreview,
    })

    // Reset form
    setTitle("")
    setContent("")
    setImage(null)
    setImagePreview(null)

    // Reset file input
    const fileInput = document.getElementById("image-upload")
    if (fileInput) fileInput.value = ""
  }

  return (
    <FormContainer>
      <FormTitle>Create New Blogs Post</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter Blogs title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <Label htmlFor="content">Content</Label>
          <TextArea
            id="content"
            placeholder="Write your Blogs content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <FileInputLabel htmlFor="image-upload">Choose Image</FileInputLabel>
          <FileInput id="image-upload" type="file" accept="image/*" onChange={handleImageChange} />

          {imagePreview && <ImagePreview src={imagePreview || "/placeholder.svg"} alt="Preview" />}
        </FormField>

        <SubmitButton type="submit">Publish Post</SubmitButton>
      </form>
    </FormContainer>
  )
}

export default BlogsForm