import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'

function handlecheck(){
  console.log("counter"+isDisabled());
    isDisabled()?true:false;
}
function Cards({title,description}) {

  return (
         <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{title}</h5>
                        {description}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                      <button type='button' class="btn btn-outline-dark mt-auto" 
                      onClick={handlecheck()}>Add to Cart</button></div>
                </div>
            </div>
            </div>
    
  );
}

export default Cards