import Mock from 'mockjs';
import ApiPath from '../apiPath';

export default Mock.mock(ApiPath.getSearchList.path,ApiPath.getSearchList.type,{
  "success": true,
  "data": [
    {
      name: '区块链'
    },
    {
      name: 'TypeScript'
    },
    {
      name: 'Vue'
    },
    {
      name: 'react'
    },
    {
      name: 'css'
    }
  ]
});