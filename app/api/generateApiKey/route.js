import User from '../../../models/user'
import { connectToDB } from '../../..//utils/database'

export const PATCH = async (req, res) => {
  const { email } = await req.json();

  const generateApiKey = async () => {
    const crypto = await import('crypto')
    const API_KEY = crypto.randomBytes(20).toString('hex')
    return API_KEY
  }

  try {
    await connectToDB()
  } catch(error) {
    return new Response(JSON.stringify("Unable to connect to database"), {status: 500})
  }

  const user = await User.findOne({ email: email })
  
  if(!user) {
    return new Response(JSON.stringify("User not found"), {status: 500})
  }

  try {
    const API_KEY = await generateApiKey()
    user.API_KEY = API_KEY
    await user.save()
    return new Response(JSON.stringify({ API_KEY }), {status: 200})
  } catch {
    return new Response(JSON.stringify("Unable to generate API key"), {status: 500})
  }
}
