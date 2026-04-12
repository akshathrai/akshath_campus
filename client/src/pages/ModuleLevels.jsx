import { useParams, useNavigate } from "react-router-dom"

export default function ModuleLevels(){

const { id } = useParams()
const navigate = useNavigate()

const levels = [
 {id:1, title:"Print It Out"},
 {id:2, title:"Store It"},
 {id:3, title:"Variables"},
 {id:4, title:"User Input"},
 {id:5, title:"Operators"},
 {id:6, title:"Mini Challenge"}
]

return(

<div className="levels-page">

<h1>Module {id} Levels</h1>

<div className="levels-path">

{levels.map((level,index)=>(

<div
key={level.id}
className={`level-node ${index % 2 === 0 ? "left" : "right"}`}
onClick={()=>navigate(`/labs/python/module/${id}/level/${level.id}`)}
>

<div className="circle">{level.id}</div>
<p>{level.title}</p>

</div>

))}

</div>

</div>

)

}