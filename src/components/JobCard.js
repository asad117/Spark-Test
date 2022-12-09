import React from 'react'
import {Card,Avatar, Button } from 'antd';
import { useParams, Link } from 'react-router-dom'


const { Meta } = Card;

function JobCard(props) {

  return (
    <div  style={{ padding: "30px 0" }}>
      <Link path={`view/${props.item.id}`} onClick={props.change}>
    <Card hoverable>
      <h3>{props.item.job_title}</h3>
    <Meta
    avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLAdVYlvBy29QEFtpnoRSAgsWaBZX12nJMg&usqp=CAU" />}
    title={props.item.company_name}
    // description="This is the description"
  />
  <div class="columns">
   <div class="column">
    {`Salary: ${props.item.salary}`}
     </div>
<div class="column">
{`Joining Date: ${props.item.joining_date}`}

</div>
</div>
<p>{props.item.job_desc}</p>      
  </Card>
  </Link>
  </div>
  )
}

export default JobCard