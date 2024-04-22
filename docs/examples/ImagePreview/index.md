<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

<script setup>
  import ImagePreview from '../../packages/lxy-image-preview/src/components/ImagePreview/index.vue'
</script>



## 基本使用

This is a simple example

<ImagePreview galleryID="my-test-gallery" :images="[
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width:800,height:1000
        }]"
    />
<ImagePreview galleryID="my-test-gallery" :images="[
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
            width:800,height:1000
        },{
            largeURL:'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
            width:800,height:1000
        }]"
    />
