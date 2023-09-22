<template>
    <div>
        <header-view/>
        <slot/>
        <footer-view/>
    </div>
</template>
<script>
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';
export default {
    components: {
        FooterView: FooterView,
        HeaderView: HeaderView
    }
}
</script>