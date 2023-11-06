<script>
export default {
    data() {
        return {
            categories: ['Donna', 'Uomo', 'Bambini'],
            icons: ['Shop', 'Like', 'Cart']
        }
    }
}
</script>

<template>
    <div class="footer-content">
        <div class="container">
        <div class="row">
            <ul class="list">
                <li v-for="section in categories">
                    <a href="">{{ section }}</a>
                </li>
            </ul>
            <div class="col grow-1">
                <img src="/boolean-logo.png" alt="">
            </div>
            <ul class="list">
                <li v-for="icon in icons">
                    <a href="">{{ icon }}</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.list {
    display: flex;
    gap: 10px;
    li {
        display: flex;
        align-items: center;
    }
    a {
        color: white;
    }
}
.col {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 150px;
    }
}
.footer-content {
    background-color: $header-color;
    width: 100vw;
    line-height: 74px;
}
</style>