import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
import Footer from './Footer'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <div>
      <div>
        <h1 className='text-3xl text-center tracking-wide py-2 mt-9'>Our Menu</h1>
      <div className='underline'></div>
      <div className='p-6 lg:p-8'>
          <Categories categories={categories} filterItems={filterItems}/>
          <Menu items={menuItems}/>
      </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home
