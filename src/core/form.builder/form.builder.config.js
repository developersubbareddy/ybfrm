import { DatePicker, Input } from "antd"

const MESSAGES = {
    validation_messages: {
        text: "Please enter valid text",
        number: "Please enter valid number",
        required: "Please enter this field"
    }
}
const validatorMethods = {
    number: (value, message) => {
        if (isNaN(value)) {
            return Promise.reject(message || MESSAGES.validation_messages["number"])
        }
        return Promise.resolve();
    },
    text: (value, message) => {
        if (!isNaN(value)) {
            return Promise.reject(message || MESSAGES.validation_messages["text"])
        }
        return Promise.resolve();
    },
}
export const GetInput = (field) => {
    const elements = {
        text: <Input placeholder={field.title} />,
        date: <DatePicker placeholder={field.title} format={"DD/MM/YYYY"} />
    }

    return elements[field.type] || elements.text;
}
export const BuildRules = (field) => {
    const rules = []
    for (const i in field?.validations) {
        const validation = field?.validations[i];
        if (validation === "required") {
            rules.push({ required: true, message: field.validationMessages[i] || MESSAGES.validation_messages["required"] })
        } else {
            rules.push({
                validator: (_, value) => {
                    return validatorMethods[validation](value, field.validationMessages[i]);
                }
            })
        }
    }
    return rules;
}