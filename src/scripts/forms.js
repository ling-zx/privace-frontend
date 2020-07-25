import pca from './pca'

const form = {
  gender: ['男', '女', '其他'],
  occupation: [
    '学生',
    '专家、技术人员及有关工作者',
    '政府官员和企业经理',
    '事务工作者和有关工作者',
    '销售工作者',
    '服务工作者',
    '农业、牧业、林业工作者及渔民、猎人',
    '生产和有关工作者、运输设备操作者和劳动者',
    '不能按职业分类的劳动者',
  ],
  hometown: pca,
  education: [
    '中等教育',
    '初中',
    '高中',
    '中专',
    '职校',
    '中技',
    '高等教育',
    '专科',
    '本科',
    '硕士研究生',
    '博士研究生',
  ],
  maritalStatus: ['未婚', '已婚', '丧偶', '离婚'],
  wentTo: pca,
}

export const formType = [

]

export default form
