# 说明

## 使用
```js
const initialValues = {
  code: {
    initValue: '',
    rules: [
      {
        required: true,
        pattern: CONST_REGEXS.str6,
        message: '激活码不能为空',
      },
    ],
  },
};

const { getFieldProps, errors } = useForms(initialValues);

const onSubmit = ()=>{
  // some code
}
const options = {
  trigger:'onChangText' // default onChange
}

<Input {...getFieldProps('code')}></Input>

<Button {...getSubmitButtonProps(onSubmit, options)}/>
```

## initialValues
validate配置

## errors
异常错误

## getFieldProps
表单校验

