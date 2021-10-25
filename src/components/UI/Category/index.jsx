import './Category.scss'

const Category = ({ name, active, setActive }) => {
  return (
    <div
      data-target={name}
      className={`category ${active ? 'category--active' : ''} `}
      onClick={setActive}>
      {name}
    </div>
  )
}

export default Category;
