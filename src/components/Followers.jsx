
import Paginate from "../components/Paginate"
import CardFollowers from "./CardFollowers"

const Followers = ({followers}) => {
  return (
    <div>
      <CardFollowers followers = {followers}/>
      <Paginate/>
    </div>
  )
}

export default Followers