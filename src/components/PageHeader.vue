<script>
export default {
    data() {
        return {
            categories: ['Donna', 'Uomo', 'Bambini'],
            icons: [['fas','user'], ['far', 'heart'], ['fas', 'bag-shopping']],
        }
    }
}
</script>

<template>
    <div class="header-content">
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
                        <a href="">
                            <font-awesome-icon class="icons" :icon="icon"></font-awesome-icon>
                        </a>
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
        font-size: 20px;
        font-weight: 600;
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

.header-content {
    background-color: $header-color;
    line-height: 74px;
}
</style>