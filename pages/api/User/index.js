
import connectMongo from "../../../database/connection";
import { getUser, postUser } from "../../../database/controller";
export default async function handler(req, res) {
  connectMongo().catch(()=>res.status(405).json({error :"Error in the connection"}))

  const {method}=req
  switch (method) {
      case "GET":
        getUser(req, res)

        break;
        case "POST":
            postUser(req, res)
            // res.status(200).json({method,name:"POST request"});
    break;
            case "PUT":
            res.status(200).json({method,name:"PUT request"});
    break;
            case "DELETE":
            res.status(200).json({method,name:"DELETE request"});
    break
            default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end('Method ${method} not supported')
        }
//   res.status(200).json({ name: 'John Doe' })
}
