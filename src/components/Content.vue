<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <transition>
                    <Menu active-name="1" theme="dark" width="auto">
                        <div class="layout-logo-left"></div>
                        <Menu-item name="1">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">选项 1</span>
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">选项 2</span>
                        </Menu-item>
                        <Menu-item name="3">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">选项 3</span>
                        </Menu-item>
                    </Menu>
                </transition>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2016-2017 &copy; ZHIOT
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 4 ? 14 : 24;
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        }
}
</script>
<style>
.layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: calc(100% - 60px);
}

.layout>.ivu-row-flex {
    height: 100%;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}
</style>
