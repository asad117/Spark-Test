import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
// import JobCard from '../components/JobCard'
import { Col, Tabs, Row,Card,Input,Button,Form, DatePicker,Avatar, Popover,Popconfirm,Space} from 'antd';
import { useParams, Link } from 'react-router-dom'
import {EditOutlined,DeleteOutlined,MoreOutlined} from "@ant-design/icons";



const { Meta } = Card;
const { TabPane } = Tabs;
const layout2 = { labelCol: { span: 10 }, wrapperCol: { span: 12 } }
const {TextArea} = Input

function HomePage(props) {
    const [JobForm] = Form.useForm();

    const allJobs = useSelector(dt=> dt)
  const dispatch = useDispatch()

    const [state, setState] = useState({
      activeTab: "1",
      currentRole:null,
      currentJob:null,
  
    });

    const submitFormData = (data)=>{
        JobForm.validateFields().then((onfulfilled) => {
          
            if (state.currentJob) {
                let current_role = allJobs.jobReducer.find(item => item.id === state.currentJob.id)
                var current_job_data = JobForm.getFieldsValue()
                let id = current_role.id
                let dt = {id, ...current_job_data}
                dispatch({type:"UPDATE_JOB", payload:dt})
                submitCallback()

            }
            else {
                const id =Date.now()
                data = {id, ...data}
                dispatch({type:"ADD_JOB", payload:data})
                submitCallback()
            }
        })
      }

    const resetForm = () =>{
        JobForm.resetFields()
    
      }

    const resetStates = ()=>{
        setState((prevState) => ({
          ...prevState,
          activeTab: "1",
          currentJob:null,
      }))
      }

    const submitCallback = ()=>{
        JobForm.resetFields()
        resetStates()
        
    
    
      }

    const changeTab = (key) => {
      setState((prevState) => ({
        ...prevState,
        activeTab: key,
        currentJob:null,
      }));
      JobForm.resetFields()
    };

    const tabChange =(id)=>{

        const item = allJobs.jobReducer.find(item=> item.id === id)
        console.log(item)



        setState((prevState) => ({
            ...prevState,
            activeTab: "3",
            currentJob: item,
        }))
        console.log("clicked", id)
    }

    const setJobId = (id)=>{
        let current = allJobs.jobReducer.find(item=> item.id === id)
        console.log(current)
        if (current){
            setState((prevState) => ({
                ...prevState,
                currentJob: current,
                activeTab: "2",
            }))
            JobForm.setFieldsValue(current)
        }
    }

  const { activeTab } = state;

  return (
<div className='main-section'> 


<Tabs centered defaultActiveKey="1" activeKey={activeTab} onChange={changeTab} >
   
<TabPane tab="Jobs" key="1">
<div style={{ textAlign: "right" }}>
        <Button type="primary" onClick={() => changeTab("2")}>Add Job</Button>
    </div>
<Row   gutter={2}>
    {allJobs.jobReducer.map(item=>
    <Col lg={{ span: 8,offset:3 }} md={{ span: 10, }} sm={{ span: 12 }} >
      <div  style={{ padding: "30px 0" }}>
      <Link  onClick={()=>tabChange(item.id)}>
    <Card hoverable>

        <div className="card-title">
           {item.job_title}
        </div>
      
    <Meta
    avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLAdVYlvBy29QEFtpnoRSAgsWaBZX12nJMg&usqp=CAU" />}
    title={item.company_name}
    // description="This is the description"
  />
  <div class="columns">
   <div class="column">
    {`Salary: ${item.salary}`}
     </div>
<div class="column">
{`Joining Date: ${item.joining_date}`}

</div>
</div>
<p>{item.job_desc}</p>      
  </Card>
  </Link>
  </div>
 
   </Col>
        )}

</Row>
</TabPane>
<TabPane centered key="2">
    <div style={{ marginLeft:"25%" }} >
<Form   layout="vertical" {...layout2} style={{ padding: '16px 5vw'}}
onFinish={submitFormData} 
form={JobForm}>
<Form.Item label="Job Title" name='job_title' 
rules={
    [{
        required: true,
        message: 'Job Title is required.'
    }, ]}
>
<Input placeholder=""  />
</Form.Item>

<Form.Item label="Company Nalme" name='company_name' 
rules={
    [{
        required: true,
        message: 'Job Title is required.'
    }, ]}
>
<Input placeholder=""  />
</Form.Item>

<Form.Item label="Salary" name="salary">
        <Input placeholder="montly"/>
      </Form.Item>
<Form.Item label="Joining Date" name="joining_date">
<DatePicker />
</Form.Item>

<Form.Item label="Job Description" name="job_desc">
          <TextArea rows={4} />
        </Form.Item>

<Form.Item style={{ justifyContent: 'center' }}>
    {state.currentJob?
<Button type="primary" htmlType="submit" style={{ background: "#4A9D45", borderColor: "#4A9D45" }} >Update Job</Button>
:<Button type="primary" htmlType="submit" style={{ background: "#4A9D45", borderColor: "#4A9D45" }} >Submit</Button>

}
</Form.Item>

</Form>
</div>
</TabPane>
<TabPane key="3">

<Row justify={'center'}  gutter={2}>
    <Col lg={{ span: 12 }} >
        {state.currentJob? 
      <div  style={{ padding: "30px 0" }}>
      
    <Card hoverable>
    <div className="card-title">
           {state.currentJob.job_title}
           <span>
    <div className="action">
        <Popover title="Action" content={
              <Space direction="vertical" width="100">
                {
                    <Button 
                    onClick={()=> setJobId(state.currentJob.id)} 
                    icon={<EditOutlined />}>
                      Edit
                    </Button>
                }
                {
            //     <Popconfirm title={`Are you sure you want to delete '${record.name}' Role`} onConfirm={() => props.deleteResourceRole(record.id, submitCallback)}>
            //       <Button danger icon={<DeleteOutlined style={{ fontSize: 17, color: '#f65314' }}/>}
            //       >
            //         Delete
            //       </Button>
            //    </Popconfirm>
                }
              
              </Space>
            }
          >
            <Button type="link" style={{ fontSize:"1.2rem" }} icon={<MoreOutlined />}></Button>
          </Popover>
          
          </div>
          </span><div>
          </div>
        </div>
    <Meta
    avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLAdVYlvBy29QEFtpnoRSAgsWaBZX12nJMg&usqp=CAU" />}
    title={state.currentJob.company_name}
    // description="This is the description"
  />
  <div class="columns">
   <div class="column">
    {`Salary: ${state.currentJob.salary}`}
     </div>
<div class="column">
{`Joining Date: ${state.currentJob.joining_date}`}

</div>
</div>
<p>{state.currentJob.job_desc}</p>      
  </Card>
  </div>
  :null}
 
   </Col>



</Row>

</TabPane>
</Tabs>
</div>




  
  )
}

export default HomePage