// 编写好规则
export const accountRules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上的字母或者数字',
      trigger: 'blur'
    }
  ]
}

export const phoneRules = {
  num: [
    {
      required: true,
      message: '手机号是必填',
      trigger: 'blur'
    },
    {
      pattern:
        /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
      message: '手机号不符合规范',
      trigger: 'blur'
    }
  ],
  verify_code: [
    {
      required: true,
      message: '验证码是必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{8,}$/,
      message: '验证码有误',
      trigger: 'blur'
    }
  ]
}
