<template>
    <!-- <div class="wrapper"> -->
        <router-view/>
    <!-- </div> -->
</template>
<script>
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
export default {
    components: {
        HeaderView: HeaderView,
        FooterView: FooterView
    }
}
</script>