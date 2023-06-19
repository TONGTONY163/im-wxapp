import { from } from "form-data";
import {request} from '../utils/request'

module.exports = {
    // 获取企业列表
    getCompanyList: (data) => request('/company/getlist', 'GET', data),
  }