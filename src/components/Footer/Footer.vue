<template>
    <div class="backtotop">
        <a href="#">
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="23" height="23"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5.793l4.354 4.353-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708L7.5.793z" fill="currentColor"></path></svg>
            Back To Top
        </a>
    </div>
    <div class="footer-f">
        {{new Date().getFullYear()}} &copy; kateawisan
    </div>
</template>
<style lang="scss">
    .backtotop {
        text-align: center;
        padding: 30px 0;

        a {
            text-decoration: none;
            opacity: 0.5;

            &:hover {
                opacity: 1;
            }
        }
    }
    .footer-f {
        text-align: center;
        padding: 20px 0;
    }
</style>