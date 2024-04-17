import Paginate from "../components/Paginate"
import CardFollowers from "./CardFollowers"

const Followers = ({filteredFollowers, currentPage, totalPages, onPageChange}) => {
  return (
    <div>
      <Paginate currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}/>
      <CardFollowers filteredFollowers = {filteredFollowers}/>
    </div>
  )
}

export default Followers