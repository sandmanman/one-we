<template>
    <div class="g-bd" style="padding-top:56px;background-color:#fafafa;">
        <h1 class="hd f-ff2">请用你的云音乐帐号登录</h1>
        <div class="lg">
            <div class="n-log2 n-log2-1 f-cb">
                <div class="u-main">
                    <div class="u-plt"></div>
                    <div class="f-mgt10">
                        <a href="javascript:;" class="u-btn2 u-btn2-2" @click="openLoginByMobile"><i>手机号登录</i></a>
                    </div>
                </div>
            </div>
        </div>

        <modal ref="modal">
            <span slot="header">手机登录</span>
            <div slot="body">
                <div class="n-log2-2">
                    <div>
                        <input type="text" class="js-input u-txt" placeholder="请输入手机号" v-model="mobile">
                    </div>
                    <div class="f-mgt10">
                        <input type="password" class="js-input u-txt" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="u-err" v-show="isError"><span>{{errorMsg}}</span></div>
                    <div class="f-mgt10">
                        <label class="s-fc3"><input type="checkbox" checked="checked" class="u-auto">&nbsp;自动登录</label>
                    </div>
                    <div class="f-mgt20">
                        <a class="js-primary u-btn2 u-btn2-2" href="javascript:;" @click="submitLogin()"><i>{{submitBtnText}}</i></a>
                    </div>
                </div>
            </div>
        </modal>

    </div>
</template>

<script>
import { loginByMobile } from '@/api'
import { docCookies, localStorage } from '@/utils'
import { mapActions } from 'vuex'

import Modal from '@/components/modal/Modal'

export default {
    beforeRouteEnter( to, from, next ) {
        // 进入登录页面，判断Cookie是否存在
        console.log('Cookie[__csrf]:'+docCookies.hasItem('__csrf'))
        next( VM => {
            if( docCookies.hasItem('__csrf') ) {
                VM.$router.push({path: '/'})
            } else {
                return false
            }
        })
    },
    name: 'Login',
    components: {
        Modal
    },
    data() {
        return {
            showLoginByMobile: false,
            mobile: '',
            password: '',
            isError: false,
            errorMsg: '',
            submitBtnText: '登录'
        }
    },
    computed: {
        // 校验手机号格式
        verificationMobile() {
            return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.mobile)
        }
    },
    methods: {
        ...mapActions([
            'setUserID',
            'setCurrentUserInfo'
        ]),
        openLoginByMobile() {
            this.mobile = ''
            this.password = ''
            this.isError = false
            this.$refs.modal.open()
        },
        closeModal() {
            this.$refs.modal.close()
        },
        submitLogin() {
            let mm = this.mobile,
                pp = this.password

            if ( mm == '' ) {
                this.errorMsg = '请输入手机号'
                this.isError = true
            } else if(!this.verificationMobile) {
                this.errorMsg = '请输入正确的手机号'
                this.isError = true
            } else if( pp == '' ) {
                this.errorMsg = '请输入登录密码'
                this.isError = true
            } else{
                this.submitBtnText = '登录中...'
                loginByMobile(mm, pp)
                    .then( res => {
                        var resCode = res.data.code

                        switch(resCode) {
                            case 501:
                                this.errorMsg = '手机号未注册'
                                this.isError = true
                                this.submitBtnText = '登录'
                            case 502:
                                this.errorMsg = '手机号或密码错误'
                                this.isError = true
                                this.submitBtnText = '登录'
                            case 200:
                                // 正确登录
                                this.isError = false
                                this.submitBtnText = '登录'
                                localStorage.setter('CURRENT_USER_ID', res.data.account.id)

                                var currentUserID = Number(localStorage.getter('CURRENT_USER_ID'))
                                // store actions
                                this.setUserID(currentUserID)
                                this.setCurrentUserInfo(currentUserID)

                                // 跳转页面或刷新
                                this.$router.push('/')
                        }
                    })
                    .catch( error => {
                        this.submitBtnText = '登录'
                        alert('登录错误')
                        console.error(error)
                    })
            }
        }
    }
}
</script>

<style scoped>
.hd{font-size:22px;height:66px;line-height:66px;text-align:center;}
.lg{width:536px;height:286px;margin:auto; border:1px solid #d8d8d8;box-shadow:0 2px 4px rgba(0,0,0,0.1);background-color:#fff;}
.u-main {float:none;border-right:none;}
</style>
