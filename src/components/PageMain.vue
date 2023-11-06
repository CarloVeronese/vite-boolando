<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: '/1.webp',
                    imgHover: '1b.webp',
                    item: 'relaxed fit tee unisex',
                    brand: "Levi's",
                    discount: '50',
                    tag: 'Sostenibilità',
                    price: 29.99
                },
                {
                    img: '/2.webp',
                    imgHover: '2b.webp',
                    item: 'roses tee',
                    brand: "Guess",
                    discount: '30',
                    tag: '',
                    price: 29.99
                },
                {
                    img: '/3.webp',
                    imgHover: '3b.webp',
                    item: 'voglia di colori pastello',
                    brand: "Come Zucchero Filato",
                    discount: '30',
                    tag: '',
                    price: 129.99
                },
                {
                    img: '/4.webp',
                    imgHover: '4b.webp',
                    item: 'tee unisex',
                    brand: "Levi's",
                    discount: '50',
                    tag: '',
                    price: 29.99
                },
                {
                    img: '/5.webp',
                    imgHover: '5b.webp',
                    item: 'stripe bodice',
                    brand: "Maya Deluxe",
                    discount: '',
                    tag: '',
                    price: 99.99
                },
                {
                    img: '/6.webp',
                    imgHover: '6b.webp',
                    item: 'MAGLIONE - BLACK',
                    brand: "Espirit",
                    discount: '',
                    tag: 'Sostenibilità',
                    price: 29.99
                }
            ]
        }
    },
    methods: {
        returnDiscountedPrice(price, discount) {
            if (discount == '') return price;
            const percDiscount =  parseFloat(discount) / 100;
            const discountedPrice = (price * (1 - percDiscount)).toFixed(2);
            return discountedPrice;
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="card in cards">
                <div class="card">
                    <figure>
                        <img :src=card.img alt="" class="card-img">
                        <img :src=card.imgHover alt="" class="card-img-hover">
                        <div class="tags">
                            <div class="discount" v-show="card.discount != ''">- {{ card.discount }}%</div>
                            <div class="tag" v-show="card.tag != ''">{{ card.tag }}</div>
                        </div>
                    </figure>
                    <div class="brand">{{ card.brand }}</div>
                    <div class="item">{{ card.item.toUpperCase() }}</div>
                    <div class="price-container">
                        <div class="discounted-price">{{ returnDiscountedPrice(card.price, card.discount) }} &euro;</div>
                        <div class="price" v-show="card.discount != ''">{{ card.price }} &euro;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    .card {
        display: flex;
        flex-direction: column;
        figure {
            position: relative;
            .card-img-hover {
                display: none;
            }
            .tags {
                display: flex;
                gap: 4px;
                color: white;
                font-weight: 600;
                position: absolute;
                left: 0;
                bottom: 70px;
                * {
                    line-height: 23px;
                    padding: 0 10px;
                }
                .discount {
                    background-color: $discount-color;
                }
                .tag {
                    background-color: $tag-color;
                }
            }
            &:hover {
                .card-img {
                    display: none;
                }
                .card-img-hover {
                    display: block;
                }
            }
        }
        .price-container {
            display: flex;
            gap: 10px;
            .discounted-price {
                color: red;
                font-weight: 600;
            }
            .price {
                text-decoration: line-through;
            }
        }
        .item {
            font-weight: 600;
        }
    }

</style>