import { Route, Routes } from 'react-router-dom'
import FormBuilder from '../core/form.builder';
import Home from '../home.component';
const RouteConfig = () => {
    return <Routes>
        <Route path='/' element={<FormBuilder httpConfig={
            {

            }} config={{
                fields: [
                    { name: "name", title: "Name", validations: ["required", "text"], validationMessages:[] },
                    { name: "age", title: "Age", validations: ["required", "number"], validationMessages: ["Please enter Age", "Please enter valid age"] },
                    { name: "email", title: "Email" },
                    { name: "dob", title: "Date of birth", type: "date" },
                    { name: "phone", title: "Mobile" }
                ], columnCount: 4
            }} />} />
        <Route path='/home' element={<Home />} />

    </Routes>
}
export default RouteConfig;