<template>
    <div id="__next">
        <AdminHeaderView/>
        <slot/>
        <admin-footer-view/>
    </div>
</template>
<script>
import AdminHeaderView from '@/components/AdminComponent/AdminHeaderView.vue'
import AdminFooterView from '../components/AdminComponent/AdminFooterView.vue'
export default {
    components: {
        AdminHeaderView: AdminHeaderView,
        AdminFooterView: AdminFooterView
    }
}
</script>
<style scoped>
#__next {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
