import { useState } from "react";
import './LikeButton.css'

const LikeButton = () => {

    const [count, setCount] = useState(0)

    const [countTwo, setCountTwo] = useState(0)

    //const colorLikes = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    return (
        
        <div className='likeCounter'>
            
            <button className="likes" onClick={() => setCount(count + 1)}>{count} ❤️ Likes</button>
            <button className="likes" onClick={() => setCountTwo(countTwo + 1)} >{countTwo} ❤️ Likes</button>

        </div>
    )

}

export default LikeButton