<template>
  <!-- <div class="content">
    <h1>Manta's World</h1>
    <section>
      <h2 class="title">基本信息</h2>
      <div class="info">
        <p>姓名：罗志威</p>
        <p>毕业院校：广东工业大学</p>
        <p>专    业：计算机测控</p>
        <p>学    历：本科</p>
        <p>联系电话：18813295487 </p>
        <p>邮    箱：luoweiwi@163.com</p>
      </div>
    </section>
    <section>
      <h2 class="title">技能</h2>
      <div class="skills">
        <ul>
          <li v-for="(i,index) in skills" :key="index">{{i}}</li>
        </ul>
      </div>
    </section>
    <section>
      <h2 class="title">工作经历</h2>
      <div class="exprince">
        <span>2018.02-至今</span>
        <span>广州三易互联网科技有限公司</span>
        <span>前端开发</span>
      </div>
    </section>
    <section>
      <h2 class="title">项目经验</h2>
      <div class="projects">
        <figure v-for="i in list" :key="i.id">
          <h3>{{i.name}}</h3>
          <div class="text">
            <span>项目：</span><span>{{i.desc}}</span>
            <span>技术：</span><span>{{i.tec}}</span>
            <span>难点：</span><span>{{i.deficult}}</span>
          </div>
        </figure>
      </div>
    </section>
  </div> -->
  <div class="container">
    <h1 class="title"> Manta's World</h1>
    <div class="content">
      <div class="box">
        <div  v-for="i in listx" :key="i">
          <span :style="{fontSize: `${i}pt`}" style="marginRight: 20px">{{i}}pt</span>
          <span :style="{fontSize: `${i}px`}">{{i}}px</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import api from '@/api';
// reactive, toRefs, ref,
import { onMounted } from '@vue/composition-api';
export default {
components: {},
setup() {
  const listx = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  const skills = [
    '·	Javascript、HTML5、CSS3基础扎实，业务能力强。',
    '·	熟悉移动端页面开发，有丰富微信公众号页面，小程序开发&适配经验。',
    '·	有独立后台管理系统搭建经验，对后台权限控制，路由有深刻的理解。',
    '·	深度使用Vue进行开发，深入了解组件，复用&组合，规模化。',
    '·	熟练使用element-ui、ant-design等框架进行后台的开发。',
    '·	有良好的编码习惯，熟练使用Gitlab进行版本、分支管理。',
    '·	有webpack使用经验，能进行项目的优化。',
    '·	能使用eChart进行图表的绘制。',
    '·	有处理页面多语言的经验。'
  ]
  const list = [
    {
      id: 1,
      name: '友邻后台管理系统',
      desc: '物业管理后台',
      tec: 'vue、element-ui、echart、scss、vuex、vue-router ',
      deficult: '后台RBAC权限的设计，使用addrouter配合vue自定义指令将权限控制精确到接口级别，在员工管理方面有极大的灵活性。 配合后端开发人员进行微信授权登录。使用axios进行接口封装，拦截请求和响应，统一处理响应错误。使用keep-alive对指定页面进行缓存，并在特殊情况清除已经缓存的页面。使用vue-cropper+vuedraggable实现图片裁剪、上传，拖拽图片实现顺序自定义等功能 。'
    },{
      id: 2,
      name: '友邻财务管理系统',
      desc: '配合友邻后台管理系统，管理业主的物业费，停车费的收缴记录。线上打印业主的账单。',
      tec: 'vue、ant-design、print-js、scss、vuex、vue-router、echart',
      deficult: '该后台主要是配合友邻后台管理系统，进行物业的账单的创建、管理和统计。用到了ant-design 作为框架。系统里有大量的的统计图表，增加了对echart使用的熟练程度。通过webpack优化通用代码，例如使用Dllplugin减少基础模块的编译次数。使用externals将部分第三方库移动到CND上，开启gzip压缩，路由懒加载等加快页面的加载速度。'
    },{
      id: 4,
      name: '微信公众号页面',
      desc: '物业的对外公众号，主要给业主提供服务，推送文章和消息，提醒业主缴纳物业费，里面还有一个小区超市，供运营发布营销活动。',
      tec: 'vue、vant、mescroll',
      deficult: '微信授权登录，线上缴费功能的实现。公众号内小区超市模块，实现了小区秒杀活动，实现了完整购物车功能。疫情期间问卷调查，使用vee vuelidate做表单校验，用户体验体验良好。利用vuex实现多主题的公众号页面，根据不同的节日显示不同的效果。配合利用Sass和媒体查询自动选择二倍图三倍图解决图片失真问题，高程度还原设计师的设计。'
    },{
      id: 3,
      name: 'ISLE（国际大屏幕显示技术、音视频智慧集成、广告标识及LED展览会）官网PC端',
      desc: ' LED展览会官网，主要服务参展商管理展品和资料、参展人员的报名。',
      tec: 'nuxt、i18n',
      deficult: '为了更好地网站SEO和更快的加载速度，使用了nuxt框架进行开发。该展会面向国际，所以使用了i18n进行页面的多语言配置。网站中有大量的展品需要展示，使用grid布局完成了页面的自适应。采购商的入场预登记，表单用element+veevuelidate配合，表单的使用体验良好。该官网对响应速度要求较高，所以大量使用图片的懒加载提高用户体验。使用webp技术减小图片的大小。使用serviceworker缓存，减少请求的响应时间。'
    },{
      id: 6,
      name: 'ISLE（国际大屏幕显示技术、音视频智慧集成、广告标识及LED展览会）官网移动端',
      desc: 'isle移动端官网，功能如上pc端官网一样',
      tec: 'vue、i18n、vuetify',
      deficult: '为了更好的显示效果，官网使用了移动端和pc端两个项目的方案，根据用户当前的设备，自动切换对应端的网站，用户的使用体验得到了明显的提高（加大了开发和部署的难度）。'
    },
  ]
  onMounted(() => {
    
  })
  return {
    list,
    skills,
    listx
  };
}
};
</script>
<style lang='sass' scoped>
// .content{
//   color: $maincolor;
//   padding: 20px;
//   text-align: left;
//   section{
//     margin-bottom: 20px;
//     .title{
//       margin-top: 20px;
//       padding: 4px 0;
//       text-align: left;
//       border-bottom: 1px solid $maincolor;
//     }
//     .info{
//       display: grid;
//       grid-template-columns: repeat(2,1fr);
//       grid-gap: 10px;
//       text-align: left;
//     }
//     .skills{
//       text-align: left;
//       li{
//         margin-bottom: 10px;
//       }
//     }
//     .exprince{
//       display: flex;
//       justify-content: space-between;
//     }
//     .projects{
//       .text{
//         grid-gap: 10px;
//         display: grid;
//         grid-template-columns: 80px auto;
//       }
//     }
//   }
  
// }
%yellowcolor
  color: $maincolor

.title
  @extend %yellowcolor
  font-size: 30px

  .container
    .content
      

</style>