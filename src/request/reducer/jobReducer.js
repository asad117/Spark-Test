const initialState = [
    // {   "id":1,
    //     "job_title": "Frontend Developer",
    //     "company_name":"ABC Technologies",
    //     "salary": "25-35k /m",
    //     "joining_date": "15/12/2022",
    //     "job_desc":"It is do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals"
    // },

    // {   "id":2,
    //     "job_title": "React Developer",
    //     "company_name":"ABC Technologies",
    //     "salary": "25-35k /m",
    //     "joining_date": "15/12/2022",
    //     "job_desc":"It is do not form sentences with a complete sense, but give life to a test text useful to fill spaces that will subsequently be occupied from ad hoc texts composed by communication professionals"
    // },
]


const jobReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_JOB":
        state = [...state, action.payload];
        return state
        

        case "UPDATE_JOB":
            const updateJob = [state.map(job=>job.id ===action.payload.id?action.payload :job)];
            state = updateJob
            console.log('this is from reducer',state)
            return state;
            // return {
            //     ...state,
            //     state: [
            //       action.payload,
            //       state.filter((job) => job.id !== action.payload.id),
            //     ],
            //   };
        default: 
            
        return state;
    }
}

export default jobReducer;