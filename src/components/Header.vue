<template>
 <div>
    <header class="header">
      <p class="logo">test</p>
      <router-link to="/rights" class="rights">授权中心</router-link>
      <router-link to="/catering" class="catering">餐饮服务</router-link>
      <p class="current-user">
        <span>当前账号: 1001&nbsp;&nbsp;</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
   methods: {
    handleCommand(){
      console.log(1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #1F2D3D;
  color: #fff;
  .logo {
    float: left;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .rights,
  .catering {
    float: left;
    width: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #836343;
    &.router-link-active {
      color: #fff;
      background-color: #58B7FF;
    }
  }
  .current-user {
    width: 300px;
    float: right;
    margin-right: 20px;
    line-height: 50px;
  }
}
</style>