<template src="./index.html"></template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import products from "@/services/products";

export default {
  components: {
    Logo,
    VuetifyLogo, 
    VueSlickCarousel
  },
  data () {
    return {
      
      windowWidth: 0,
      txt: '',
      marcas: [],
      settings:{
        "dots": false,
        "infinite": false,
        "initialSlide": 1,
        "speed": 500,
        "slidesToShow": 4,
        "slidesToScroll": 1,
        "swipeToSlide": true
      },
      items: [{}],
      features: [
        {
          icon: '/group-33.png',
          title: 'Titulo',
          text: 'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.',
        },
        {
          icon: '/alarm-clock-2.png',
          title: 'Titulo',
          text: 'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.',
        },
        {
          icon: '/ic-notifications-none.png',
          title: 'Titulo',
          text: 'Texto corrido com informações que vão ser preenchidas depois que a página estiver pronta.',
        },
      ],
      
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.changeMarcas(this.windowWidth);
    },
    
    getColor (percentage) {
      if (percentage <= -10) {
        return "background: #1B5E20";
      } else if (percentage <= 0) {
        return "background: #00C853";
      } else if (percentage > 0 && percentage < 5)  {
        return "background: #FFC107";
      } else if (percentage > 5 && percentage < 10)  {
        return "background: #FF980; color: black";
      } else if (percentage > 10) {
        return "background: #DD2C00";
      }
    },
    changeMarcas (width) {
      if (width <= 600) {
        
        this.marcas = [
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'blue',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'orange',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'purple',
          }
        ];
        this.settings = {
          "dots": false,
          "infinite": true,
          "initialSlide": 1,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "swipeToSlide": true
        };
      } else {
        this.marcas = [
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'blue',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'orange',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'purple',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: '',
          },
          {
            icon: '/logo-placeholder-2-x.png',
            color: 'yellow',
          }
        ];
        

        this.settings = {
          "dots": false,
          "infinite": true,
          "initialSlide": 1,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 1,
          "swipeToSlide": true
        };
      }
    }
  },

  async mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
    this.items = await products.get(); 
    this.windowWidth = window.innerWidth;
    this.changeMarcas(this.windowWidth);
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>
<style scoped>
  .text-store {
    color: #3aacd1;
  }
  .text-price {
    color: #5555d9;
    font-weight: bold;
    font-size: 20px;
  }
  .image-product {
    display: inherit;
  }
  .cnt-badget-percantage {
    position: absolute;
    top: 16px;
    left: 0;
  }
  .baget-percentage {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 74px;
    height: 42px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -1px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>