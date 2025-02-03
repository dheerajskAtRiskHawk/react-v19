import { useState, useOptimistic } from "react";


const updateLike = (newLikes)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(newLikes);
        }, 3000);
    });
};

export default function LikeButton(){
    const [actualLikes, setLikes] = useState(null);
    const [optimisticLikes, setOptimisticLikes] = useOptimistic(10);

    const formAction = async (e) => {
        // Assume that like will be updated on server.
        setOptimisticLikes(optimisticLikes + 1);
        try{
            const updatedLikes = await updateLike(optimisticLikes + 1);
            setLikes(updatedLikes);
            console.log("Likes updated on server");
        }catch(err){
            console.log(err);
            setOptimisticLikes(optimisticLikes - 1);
        }
    }

    return (
        <form action={formAction}>
        <p>No of Likes {actualLikes ? actualLikes: optimisticLikes}</p>
        <p>
            <button type="submit">Like</button>
        </p>
        </form>
    );
}