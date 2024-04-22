<template>
   <div :id="galleryID">
    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
    >
      <img :src="image.thumbnailURL" alt="" />
    </a>
  </div>
</template>
<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import photoswipe from 'photoswipe'
export default {
  name:"ImagePreview",
  props: {
    galleryID: String,
    images: Array,
  },
  data(){
    return {
      lightbox:null,
      imagesData:this.images
    }
  },
   mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: photoswipe
      });
      this.lightbox.init();
    }
  },
   unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
}
</script>
<style lang="less">
.pswp__img{
  object-fit:scale-down;
}
</style>