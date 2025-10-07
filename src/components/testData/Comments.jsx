import { useDispatch, useSelector } from "react-redux"



export default function Comments() {
    const dispatch = useDispatch()
    const comments = useSelector((store) => store.comments)

    console.log(comments)
    // return <p>
    //     {comments}
    // </p>

}