<template>
    <div class="header">
        <div class="logo">
            <img src="./../../assets/logo.png" alt=""><br>
            <span style="color: grey;">Kate Awisan</span>
        </div>
        <div class="navigation">
            <ul>
                <li @click="$router.push('/')">Portfolio</li>
                <li @click="$router.push('/about')">About</li>
                <li @click="$router.push('/contact')">Contact</li>
            </ul>
        </div>
        <div class="social-links">
            <ul>
                <li ><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"><path d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z" fill="currentColor"></path></svg></li>
                <li><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"><path d="M0 7.5a7.5 7.5 0 118 7.484V9h2V8H8V6.5A1.5 1.5 0 019.5 5h.5V4h-.5A2.5 2.5 0 007 6.5V8H5v1h2v5.984A7.5 7.5 0 010 7.5z" fill="currentColor"></path></svg></li>
                <li><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM5 5H4V4h1v1zm-1 6V6h1v5H4zm4.5-4A1.5 1.5 0 007 8.5V11H6V6h1v.5a2.5 2.5 0 014 2V11h-1V8.5A1.5 1.5 0 008.5 7z" fill="currentColor"></path></svg></li>
                <li><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"><path d="M7.5 5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0A4.5 4.5 0 000 4.5v6A4.5 4.5 0 004.5 15h6a4.5 4.5 0 004.5-4.5v-6A4.5 4.5 0 0010.5 0h-6zM4 7.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM11 4h1V3h-1v1z" fill="currentColor"></path></svg></li>
                <li><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :width="iconSize" :height="iconSize"><path d="M0 7.5a7.5 7.5 0 114.584 6.912l1.911-4.367A2.58 2.58 0 008.5 11 3.5 3.5 0 0012 7.5V7a4 4 0 00-4-4H7a4 4 0 00-4 4v.5c0 .896.337 1.715.891 2.333l.745-.666A2.489 2.489 0 014 7.5V7a3 3 0 013-3h1a3 3 0 013 3v.5A2.5 2.5 0 018.5 10 1.58 1.58 0 017 8.919l-.005-.016.963-2.203-.916-.4-3.352 7.66A7.496 7.496 0 010 7.5z" fill="currentColor"></path></svg></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            iconSize: 18
        }
    }
}
</script>
<style lang="scss" src="./style.scss"></style>