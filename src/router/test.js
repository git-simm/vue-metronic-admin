/**
 * 流程路由信息
*/
import Vue from 'vue'
import testRoot from '@/components/test/testroot'
import tree from '@/components/test/tree'
import test2 from '@/components/test/test2'

const test = [
	{
	  path: '/test',
	  name: 'testRoot',
    component: testRoot,
    children:[
      {
          path:"/test1",
          component:tree
      },
      {
          path:"/test2",
          component:test2
      }
    ]
	}
]
export default test;
