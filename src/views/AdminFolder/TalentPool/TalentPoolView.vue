<template>
    <div>
        <TalentHeaderView/>
        <router-view/>
    </div>
</template>
<script>
import TalentHeaderView from '@/components/TalentPoolComponent/TalentHeaderView.vue';
export default {
    components: {
        TalentHeaderView: TalentHeaderView
    }
}
</script>