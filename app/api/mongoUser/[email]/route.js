import { connectToDB } from "@/utils/database"
import User from "@/models/user"


export const GET = async (req, {params}) => {
    connectToDB();
    const user = await User.find({email: params.email});
    return new Response(JSON.stringify(user), {status: 200})
}
