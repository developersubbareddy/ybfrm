import { Button, Col, Form, Input, Row } from "antd";
import { BuildRules, GetInput } from "./form.builder.config";
const FormBuilder = ({ config, httpConfig }) => {
    const { url, method, params } = httpConfig;
    const { fields = [], initialValues = {},
        showFooter = true,
        showAuditLog = true, dateFormat = "DD/MM/YYYY",
        saveBtnTxt = "Save", cancelBtnTxt = "Cancel",
        columnCount = 4
    } = config;
    const span = {
        1: 24,
        2: 12,
        3: 8,
        4: 6
    }


    return <Form initialValues={initialValues} layout="vertical" onFinish={(values)=>{console.log(values)}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {fields.map((field, indx) => <Col key={indx} span={span[columnCount]}>
                <Form.Item name={field.name} label={field.title} rules={BuildRules(field)}>
                   {GetInput(field)}
                </Form.Item>
            </Col>)}
        </Row>
        {showFooter && <Form.Item>
            <Button htmlType="submit" type="primary">{saveBtnTxt}</Button>
            <Button htmlType="button" type="default">{cancelBtnTxt}</Button>
        </Form.Item>}
    </Form>

}
export default FormBuilder