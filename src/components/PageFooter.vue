<script>
export default {
    data() {
        return {
            company: 'Boolando s.r.l',
            links: ['Informazioni legali', 'Informativa sulla privacy', 'Diritto di recesso'],
            findUs: 'Trovaci anche su',
            socials: [['fab', 'twitter'], ['fab', 'facebook'], ['fab', 'instagram'], ['fab', 'pinterest'], ['fab', 'youtube']]
        }
    }
}
</script>

<template>
    <div class="footer-content">
        <div class="container">
            <div class="row justify-between">
                <div class="info-container">
                    <div class="company">{{ company }}</div>
                    <ul class="info-links">
                        <li v-for="info in links">
                            <a href="">{{ info }}</a>
                        </li>
                    </ul>
                </div>
                <div class="social-container">
                    <div class="find-us">{{ findUs }}</div>
                    <ul class="social-links">
                        <li v-for="social in socials">
                            <a href="">
                                <font-awesome-icon class="icon" :icon="social"></font-awesome-icon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.footer-content {
    padding: 30px 0;
    background-color: $footer-color;
    color: white;

    .info-container {
        display: flex;
        flex-direction: column;

        .company {
            font-size: 20px;
            font-weight: 600;
        }

        .info-links {
            display: flex;
            gap: 10px;
            a {
                color: white;
            }
        }
    }

    .social-container {
        display: flex;
        flex-direction: column;

        .find-us {
            font-size: 20px;
            font-weight: 600;
        }

        .social-links {
            display: flex;
            gap: 10px;
            a {
                color: white;
            }
        }
    }
}</style>