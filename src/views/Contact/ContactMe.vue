<template>

    <div v-scrollanimation class="contact">
        <h1 style="margin: 0;">Contact</h1>
        <p style="margin: 0;">You Can Contact Me Through The form Bellow.</p>
        <FormContact />
    </div>
</template>
<script>
import FormContact from './Form'
export default {
    components: {FormContact}
}
</script>
<style lang="scss">
    .contact {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        h1 {
            font-size: 3rem;
        }
        
    }
</style>