import './Category.scss'

const Category = ({ name, active }) => {
  return (
    <div
      className={`category ${active ? 'category--active' : ''} `}>
      {name}
    </div>
  )
}

export default Category;
