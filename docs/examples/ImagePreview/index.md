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
        }]"
    /> <ImagePreview galleryID="my-test-galle1ry" :images="[
        {
          largeURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
          thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
        },{
            largeURL:'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
                thumbnailURL:
            'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
        }]"
    />
