<template>
    <div  class="about-me">
        <div class="image">
            <img src="./../../assets/image/kate.jpg" alt="">
        </div>
        <div class="kate-info">
            <h2>Kate Awisan</h2>
            <h5>kateawisan@gmail.com</h5>
            <p>Hello there! <br><br>I am Kate, an experienced social media assistant, customer service representative and freelance graphic designer from beautiful Asian country Philippines. I got my Bachelors degree in Information Technology at Kings College of the Philippines in 2019. <br>My works are mostly focused on data entry and designing. <br><br>
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