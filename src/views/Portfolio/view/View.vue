<template>
    <div v-scrollanimation class="view">
        <h1>{{selected.title}}</h1>
        <div class="details">
            <p>{{selected.des}}</p>
        </div>
        <div class="images">
            <img v-for="img in selected.images" :src="img" :key="img" alt="">
        </div>
    </div>
</template>
<script>
import Works from './../works'
export default {
    data:() => {
        return {
            selected: {
                title: "",
                des: "",
                images: []
            }
        }
    },
    mounted() {
        for(let w of Works) {
            if (w.title == this.$route.params.id) {
                this.selected = w
                console.log(this.selected)
                break;
            }
        }
    }
}
</script>
<style lang="scss">
    .view {
        h1 {
            font-size: 3rem;
            text-align: center;
        }
        .details {
            display: flex;
            justify-content: center;
            p {
                font-size: 1.4rem;
                text-align: center;
                max-width: 500px;
            }
        }
        .images {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            img {
                max-width: 700px;
            }
        }
        
    }
</style>