import React from 'react'
import CollectionsGrid from '../comps/CollectionsGrid'

function Collections() {
  return (
    <div className="collectionsPage">
        <div className="container">
            <div className="pageHead">
                <h1>Collection</h1>
                <hr />
            </div>
        </div>

        <CollectionsGrid/>
    </div>
  )
}

export default Collections