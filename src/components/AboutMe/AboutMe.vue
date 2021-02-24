<template>
    <div  class="about-me">
        <div class="image">
            <img src="./../../assets/image/kate.jpg" alt="">
        </div>
        <div class="kate-info">
            <h2>Kate Awisan</h2>
            <h5>kateawisan@gmail.com</h5>
            <p>Hi! I'm Kate Awisan a experienced graphic designer from beautiful Asian country Philippines. I got my Bachelors degree in Information Technology at Kings College of the Philippines in 2019. My work is mostly focused on designing and creating contents. <br><br>
            <q><b>The best way to predict the future is to create it.</b></q>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutMe",
    methods: {
        openLink(link) {
            window.open(link,'_blank')
        }
    }
}
</script>
<style lang="scss" src="./AboutMe.scss" />