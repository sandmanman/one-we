<template>
    <div class="m-layer" ref="modal" :class="{show:isShow}">
        <div class="zbar">
            <div class="zttl">
                <slot name="header">
                    标题
                </slot>
            </div>
        </div>
        <div class="zcnt">
            <div class="lyct lyct-1">
                <div class="n-log2">
                    <slot name="body">
                        内容
                    </slot>
                </div>
            </div>
        </div>
        <span class="zcls" title="关闭" @click="close()">×</span>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        open() {
            this.isShow = true
            this.$refs.modal.focus()
        },
        close() {
            this.$nextTick(()=>{
                this.isShow = false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.m-layer {
    display: none;

    &.show {
        display: block;
    }
}
</style>