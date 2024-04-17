import Paginate from "../components/Paginate"
import CardFollowers from "./CardFollowers"

const Followers = ({filteredFollowers}) => {
  return (
    <div>
      <CardFollowers filteredFollowers = {filteredFollowers}/>
      <Paginate/>
    </div>
  )
}

export default Followers