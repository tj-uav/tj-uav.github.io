// Make sure this file is in the correct location
// For a standard React app (not Next.js), you might need a different approach

export async function POST(req) {
	try {
	  const body = await req.json()
	  const { name, email, message } = body
  
	  // Validate form inputs
	  if (!name || !email || !message) {
		return new Response(JSON.stringify({ message: "Please fill in all fields" }), {
		  status: 400,
		  headers: { "Content-Type": "application/json" },
		})
	  }
  
	  // Email validation regex
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	  if (!emailRegex.test(email)) {
		return new Response(JSON.stringify({ message: "Please enter a valid email address" }), {
		  status: 400,
		  headers: { "Content-Type": "application/json" },
		})
	  }
  
	  // Log the attempt (for debugging)
	  console.log(`Attempting to send email from ${email} to ricksinha08@gmail.com`)
  
	  // For now, just return success without actually sending email
	  // This helps us test if the API route is working
	  return new Response(JSON.stringify({ message: "Email would be sent in production" }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	  })
	} catch (error) {
	  console.error("Error in contact API:", error)
	  return new Response(JSON.stringify({ message: "Failed to process request" }), {
		status: 500,
		headers: { "Content-Type": "application/json" },
	  })
	}
  }
  
  