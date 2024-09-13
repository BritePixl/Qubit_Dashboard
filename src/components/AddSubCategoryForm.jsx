import React, { useState } from 'react'
import API from '../utils/API';

const AddSubCategoryForm = ({parent, refreshCategory, setRefreshCategory}) => {
    const [isSaved, setIsSaved] = useState(false);
    // category information
    const [name, setName] = useState('');
    const [hasProducts, setHasProducts] = useState(true);
    
    const handleSubmit = () => {
        API.post('/categories/', {name, hasProducts, parent})
        .then((res) => {
            console.log(res.data);
            setRefreshCategory(!refreshCategory)
            setIsSaved(true);
        })
    }

  return (
    <div>
        {
            isSaved? (
                <>Saved successfuly</>
            ):(
                <form className="product-form">
                    <label>Subcategory Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <div className='sub_cats_toggler'>
                        <button onClick={() => setHasProducts(true)} className={hasProducts?'active': ''} type='button'>Products</button>
                        <button onClick={() => setHasProducts(false)} className={hasProducts?'': 'active'} type='button'>Categories</button>
                    </div>
                    <button onClick={() => handleSubmit()} type="button">Save Category</button>
                </form>
            )
        }
    </div>
  )
}

export default AddSubCategoryForm
